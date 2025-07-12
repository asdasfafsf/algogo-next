import Link from 'next/link';
import { LogoWithText } from '@/components/ui/LogoWithText';
import { Typography } from '@/components/ui/Typography';

export function LandingFooter() {
  return (
    <footer className="bg-white border-t border-gray-200">
      <div className="container max-w-screen-xl px-4 py-8 mx-auto">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
          {/* 브랜드 섹션 */}
          <div className="space-y-4">
            <LogoWithText size="small" />
            <Typography variant="muted" size="default">
              더 나은 코딩 테스트 준비를 위한
              <br />
              당신의 코딩 파트너
            </Typography>
          </div>

          {/* 제품 섹션 */}
          <div className="space-y-4">
            <Typography variant="h4" size="sm">제품</Typography>
            <ul className="space-y-2">
              <li>
                <Link href="/extension">
                  <Typography variant="muted" className="hover:text-blue-600 transition-colors">
                    확장 프로그램
                  </Typography>
                </Link>
              </li>
            </ul>
          </div>

          {/* 지원 섹션 */}
          <div className="space-y-4">
            <Typography variant="h4" size="sm">지원</Typography>
            <ul className="space-y-2">
              <li>
                <Link href="/contact">
                  <Typography variant="muted" className="hover:text-blue-600 transition-colors">
                    문의하기
                  </Typography>
                </Link>
              </li>
            </ul>
          </div>

          {/* 연락처 섹션 */}
          <div className="space-y-4">
            <Typography variant="h4" size="sm">연락처</Typography>
            <ul className="space-y-3">
              <li>
                <Typography variant="muted" size="default">서울특별시 강남구 테헤란로</Typography>
              </li>
              <li>
                <Typography variant="muted" size="default">이메일: support@algogo.kr</Typography>
              </li>
              <li>
                <Typography variant="muted" size="default">전화: 02-123-4567</Typography>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* 하단 법적 정보 */}
      <div className="border-t border-gray-200">
        <div className="container max-w-screen-xl px-4 py-8 mx-auto">
          <div className="flex flex-col items-center justify-center space-y-4">
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/terms">
                <Typography variant="muted" className="hover:text-blue-600 transition-colors">
                  이용약관
                </Typography>
              </Link>
              <Typography variant="muted" size="sm">|</Typography>
              <Link href="/privacy">
                <Typography variant="muted" className="hover:text-blue-600 transition-colors">
                  개인정보처리방침
                </Typography>
              </Link>
              <Typography variant="muted" size="sm">|</Typography>
              <Link href="/service-policy">
                <Typography variant="muted" className="hover:text-blue-600 transition-colors">
                  서비스 운영정책
                </Typography>
              </Link>
            </div>
            <Typography variant="muted" className="text-center">
              © {new Date().getFullYear()} AlgoGo Corp. All rights reserved.
            </Typography>
          </div>
        </div>
      </div>
    </footer>
  );
}
