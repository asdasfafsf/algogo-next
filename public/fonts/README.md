# 폰트 파일 설정 가이드

이 디렉토리에 커스텀 폰트 파일들을 추가하세요.

## 추천 폰트 형식

- **woff2** (최신 브라우저, 최고 압축률)
- **woff** (호환성을 위한 fallback)

## 파일 구조 예시

```
public/fonts/
├── Pretendard-Regular.woff2
├── Pretendard-Regular.woff
├── Pretendard-Medium.woff2
├── Pretendard-Medium.woff
├── Pretendard-SemiBold.woff2
├── Pretendard-SemiBold.woff
├── Pretendard-Bold.woff2
└── Pretendard-Bold.woff
```

## 설정 방법

1. 폰트 파일들을 이 디렉토리에 복사
2. `src/styles/fonts.css` 파일을 열어서 주석을 해제하고 파일명 수정
3. 필요에 따라 폰트 패밀리 이름 변경

## 현재 설정된 폰트

- 기본 폰트: Pretendard (fallback: 시스템 폰트)
- 클래스: `font-custom`

## 추천 한글 폰트

- **Pretendard**: 모던하고 가독성이 좋은 한글 폰트
- **Noto Sans KR**: 구글이 제공하는 무료 한글 폰트
- **Spoqa Han Sans Neo**: 깔끔한 디자인의 한글 폰트

## 폰트 다운로드 링크

- [Pretendard](https://github.com/orioncactus/pretendard)
- [Noto Sans KR](https://fonts.google.com/noto/specimen/Noto+Sans+KR)
- [Spoqa Han Sans Neo](https://spoqa.github.io/spoqa-han-sans/)
