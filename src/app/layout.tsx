import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/contexts/ThemeContext";
import { EditorThemeProvider } from "@/contexts/EditorThemeContext";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    template: '알고고 - %s',
    default: '알고고 - 알고리즘 학습 플랫폼'
  },
  description: "효율적인 알고리즘 학습과 문제 해결을 위한 플랫폼",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased font-custom`}
        style={{
          // 커스텀 폰트가 로드되기 전 fallback 폰트 설정
          '--font-custom': "'Pretendard', -apple-system, BlinkMacSystemFont, system-ui, Roboto, 'Helvetica Neue', 'Segoe UI', 'Apple SD Gothic Neo', 'Noto Sans KR', 'Malgun Gothic', sans-serif"
        } as React.CSSProperties}
      >
        <ThemeProvider>
          <EditorThemeProvider>
              {children}
          </EditorThemeProvider>
        </ThemeProvider>
        <div id="modal-root" />
      </body>
    </html>
  );
}
