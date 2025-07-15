import { NextResponse, type NextRequest } from 'next/server';
import { decodeJwt } from 'jose';
import { cookies } from 'next/headers';
import { ResponseCookies } from 'next/dist/compiled/@edge-runtime/cookies';

// 토큰이 갱신 필요한지 확인
function needsTokenRefresh(accessToken: string): boolean {
  try {
    const decoded = decodeJwt(accessToken);
    if (!decoded.exp) return true;
    
    const now = Math.floor(Date.now() / 1000);
    const timeLeft = decoded.exp - now;
    
    // 만료되었거나 1분(60초) 이내에 만료 예정이면 갱신 필요
    return timeLeft <= 60;
  } catch {
    return true; // 이상한 토큰이면 갱신 필요
  }
}

// 토큰 갱신
async function refreshTokens(refreshToken: string): Promise<NextResponse | null> {
  try {
    const refreshResponse = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/api/v2/auth/refresh`,
      {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${refreshToken}`,
          'Cookie': `refresh_token=${refreshToken}`,
        },
        credentials: 'include',
      }
    );

    if (refreshResponse.status === 200) {
      const response = NextResponse.next();
      const setCookieHeaders = refreshResponse.headers.get('set-cookie');
      
      if (setCookieHeaders) {
        // Next.js 공식 방식: refreshResponse에서 직접 ResponseCookies 생성
        const refreshCookies = new ResponseCookies(refreshResponse.headers);
        
        // ResponseCookies에서 파싱된 쿠키들 가져오기
        const parsedCookies = refreshCookies.getAll();
        
        const cookieStore = await cookies();
        
        // 파싱된 쿠키들을 설정
        parsedCookies.forEach(cookie => {
          // 백엔드에서 받은 원본 옵션 그대로 사용
          const options = {
            domain: cookie.domain,
            path: cookie.path,
            expires: cookie.expires,
            maxAge: cookie.maxAge,
            secure: cookie.secure,
            httpOnly: cookie.httpOnly,
            sameSite: cookie.sameSite,
            partitioned: cookie.partitioned,
            priority: cookie.priority
          };
          
          cookieStore.set(cookie.name, cookie.value, options);
          response.cookies.set(cookie.name, cookie.value, options);
        });
      }
      
      return response;
    }
    
    return null;
  } catch {
    return null;
  }
}

export async function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;
  
  // 정적 파일과 API 경로는 건너뛰기
  if (
    pathname.startsWith('/_next/') ||
    pathname.startsWith('/api/') ||
    pathname.includes('.') ||
    pathname.includes('/oauth/v2/callback') ||
    pathname.includes('/login')
  ) {
    return NextResponse.next();
  }

  const accessToken = request.cookies.get('access_token')?.value;
  const refreshToken = request.cookies.get('refresh_token')?.value;

  // access_token이 만료되거나 이상하면 refresh 요청
  if (accessToken && needsTokenRefresh(accessToken) && refreshToken) {
    const refreshedResponse = await refreshTokens(refreshToken);
    if (refreshedResponse) {
      return refreshedResponse;
    }
    
    // 갱신 실패시 만료된 토큰 삭제
    const response = NextResponse.next();
    response.cookies.delete('access_token');
    return response;
  }

  // access_token은 없지만 refresh_token이 있으면 갱신 시도
  if (!accessToken && refreshToken) {
    const refreshedResponse = await refreshTokens(refreshToken);
    if (refreshedResponse) {
      return refreshedResponse;
    }
    
    // 갱신 실패시 만료된 refresh token 삭제
    const response = NextResponse.next();
    response.cookies.delete('refresh_token');
    return response;
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     * - public files (public folder)
     */
    '/((?!api|_next/static|_next/image|favicon.ico|.*\\..*|public).*)',
  ],
};