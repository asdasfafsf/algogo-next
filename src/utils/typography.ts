/**
 * 한글 텍스트의 줄바꿈을 최적화합니다.
 * 조사, 어미 등이 혼자 남지 않도록 처리합니다.
 */
export function optimizeKoreanLineBreak(text: string): string {
  // 한글 조사들 (이/가, 을/를, 에서, 으로 등)
  const koreanParticles = /(\s)(이|가|을|를|에서|으로|에게|께서|부터|까지|만|도|은|는|의|과|와|에|로|한테|보다|처럼|같이)(\s|$)/g;
  
  // 조사 앞에 줄바꿈 방지 문자(&nbsp;) 추가
  return text.replace(koreanParticles, '\u00A0$2$3');
}

/**
 * 텍스트의 길이에 따라 적절한 line-height를 반환합니다.
 */
export function getOptimalLineHeight(textLength: number): number {
  if (textLength < 50) return 1.4;
  if (textLength < 100) return 1.5;
  if (textLength < 200) return 1.6;
  return 1.7;
}

/**
 * 텍스트를 지정된 길이로 자르고 말줄임표를 추가합니다.
 */
export function truncateText(text: string, maxLength: number, suffix = "..."): string {
  if (text.length <= maxLength) return text;
  return text.slice(0, maxLength - suffix.length) + suffix;
}

/**
 * 제목용 텍스트에서 불필요한 공백을 정리합니다.
 */
export function normalizeTitle(title: string): string {
  return title
    .trim()
    .replace(/\s+/g, ' ') // 연속된 공백을 하나로
    .replace(/([.!?])\s*$/g, '$1'); // 끝의 불필요한 공백 제거
}

/**
 * 본문 텍스트의 가독성을 위해 문단을 정리합니다.
 */
export function formatParagraph(text: string): string {
  return text
    .trim()
    .replace(/\n\s*\n/g, '\n\n') // 연속된 빈 줄을 하나로
    .replace(/([.!?])\s*\n/g, '$1\n\n') // 문장 끝 후 적절한 간격
    .replace(/\s+/g, ' '); // 연속된 공백을 하나로
}

/**
 * 코드나 특수 문자가 포함된 텍스트를 안전하게 표시합니다.
 */
export function escapeHtml(text: string): string {
  const htmlEscapes: Record<string, string> = {
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
    '"': '&quot;',
    "'": '&#39;',
  };
  
  return text.replace(/[&<>"']/g, (match) => htmlEscapes[match]);
}

/**
 * 텍스트의 읽기 예상 시간을 계산합니다 (분 단위).
 * 한글은 분당 약 200-250자, 영어는 분당 약 200-250단어 기준
 */
export function calculateReadingTime(text: string): number {
  const koreanChars = (text.match(/[가-힣]/g) || []).length;
  const englishWords = (text.match(/[a-zA-Z]+/g) || []).length;
  const otherChars = text.length - koreanChars;
  
  // 한글: 분당 225자, 영어: 분당 225단어
  const koreanMinutes = koreanChars / 225;
  const englishMinutes = englishWords / 225;
  const otherMinutes = otherChars / 450; // 기타 문자는 더 빠르게
  
  const totalMinutes = koreanMinutes + englishMinutes + otherMinutes;
  return Math.max(1, Math.ceil(totalMinutes)); // 최소 1분
}

/**
 * 텍스트에서 한글과 영어의 비율을 계산합니다.
 */
export function getTextLanguageRatio(text: string): { korean: number; english: number; other: number } {
  const koreanChars = (text.match(/[가-힣]/g) || []).length;
  const englishChars = (text.match(/[a-zA-Z]/g) || []).length;
  const totalChars = text.length;
  const otherChars = totalChars - koreanChars - englishChars;
  
  return {
    korean: totalChars > 0 ? Math.round((koreanChars / totalChars) * 100) : 0,
    english: totalChars > 0 ? Math.round((englishChars / totalChars) * 100) : 0,
    other: totalChars > 0 ? Math.round((otherChars / totalChars) * 100) : 0,
  };
}

/**
 * 검색어를 하이라이트합니다.
 */
export function highlightText(text: string, searchTerm: string, highlightClass = "bg-yellow-200"): string {
  if (!searchTerm) return text;
  
  const regex = new RegExp(`(${searchTerm.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')})`, 'gi');
  return text.replace(regex, `<mark class="${highlightClass}">$1</mark>`);
} 