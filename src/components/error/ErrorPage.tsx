import { ErrorMessage } from "./ErrorMessage";
import { Button } from "../ui/Button";

export interface ErrorPageProps {
  title?: string;
  message?: string;
  statusCode?: number;
  showHomeButton?: boolean;
  showBackButton?: boolean;
  onRetry?: () => void;
}

export function ErrorPage({
  title,
  message,
  statusCode = 400,
  showHomeButton = true,
  showBackButton = true,
  onRetry,
}: ErrorPageProps) {
  const getDefaultContent = () => {
    switch (statusCode) {
      case 400:
        return {
          title: "잘못된 요청입니다",
          message: "요청하신 내용을 처리할 수 없습니다. 입력값을 확인해주세요.",
          icon: (
            <svg className="w-16 h-16 opacity-60" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          ),
        };
      case 404:
        return {
          title: "페이지를 찾을 수 없습니다",
          message: "요청하신 페이지가 존재하지 않거나 이동되었습니다.",
          icon: (
            <svg className="w-16 h-16 opacity-60" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.172 16.172a4 4 0 015.656 0M9 12h6m-6-4h6m2 5.291A7.962 7.962 0 0112 15c-2.34 0-4.464-.926-6.021-2.435" />
            </svg>
          ),
        };
      case 500:
        return {
          title: "서버 오류가 발생했습니다",
          message: "일시적인 문제가 발생했습니다. 잠시 후 다시 시도해주세요.",
          icon: (
            <svg className="w-16 h-16 opacity-60" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z" />
            </svg>
          ),
        };
      default:
        return {
          title: "오류가 발생했습니다",
          message: "예상치 못한 오류가 발생했습니다. 다시 시도해주세요.",
          icon: (
            <svg className="w-16 h-16 opacity-60" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z" />
            </svg>
          ),
        };
    }
  };

  const defaultContent = getDefaultContent();
  const finalTitle = title || defaultContent.title;
  const finalMessage = message || defaultContent.message;

  const shouldShowRetry = onRetry && statusCode === 500; // 500에러에서만 다시시도 제공
  const shouldShowBack = showBackButton; // 모든 에러에서 뒤로가기 우선

  const getButtonVariant = (statusCode: number) => {
    switch (statusCode) {
      case 400:
        return {
          outline: "border-red-300 text-red-700 hover:bg-red-50",
          solid: "bg-red-600 hover:bg-red-700 text-white"
        };
      case 404:
        return {
          outline: "border-red-200 text-red-600 hover:bg-red-50",
          solid: "bg-red-500 hover:bg-red-600 text-white"
        };
      case 500:
        return {
          outline: "border-red-400 text-red-800 hover:bg-red-50",
          solid: "bg-red-700 hover:bg-red-800 text-white"
        };
      default:
        return {
          outline: "border-red-300 text-red-700 hover:bg-red-50",
          solid: "bg-red-600 hover:bg-red-700 text-white"
        };
    }
  };

  const buttonStyles = getButtonVariant(statusCode);

  const actions = (
    <div className="flex flex-col sm:flex-row gap-3 mt-6">
      {shouldShowBack && (
        <Button 
          variant="outline"
          onClick={() => window.history.back()}
          className={`order-1 ${buttonStyles.outline}`}
        >
          뒤로가기
        </Button>
      )}
      {shouldShowRetry && (
        <Button 
          variant="outline" 
          onClick={onRetry}
          className={`order-2 ${buttonStyles.outline}`}
        >
          다시 시도
        </Button>
      )}
      {showHomeButton && (
        <Button 
          onClick={() => window.location.href = '/'}
          className={`order-3 ${buttonStyles.solid}`}
        >
          홈으로 이동
        </Button>
      )}
    </div>
  );

  return (
    <div className="min-h-screen flex items-center justify-center p-4 bg-gradient-to-br from-gray-50 to-gray-100">
      <div className="max-w-md w-full">
        <ErrorMessage
          title={finalTitle}
          message={finalMessage}
          icon={defaultContent.icon}
          action={actions}
          size="lg"
          className="shadow-lg"
        />
        
        {/* Status code display */}
        <div className="text-center mt-6">
          <span className="text-xs text-gray-400 font-mono">
            ERROR {statusCode}
          </span>
        </div>
      </div>
    </div>
  );
}