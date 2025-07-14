import { ErrorMessage } from "./ErrorMessage";
import { Button } from "../ui/Button";

export interface BadRequestErrorProps {
  message?: string;
  onRetry?: () => void;
  showHomeButton?: boolean;
}

export function BadRequestError({ 
  message = "요청하신 내용을 처리할 수 없습니다. 입력값을 확인해주세요.",
  onRetry,
  showHomeButton = true 
}: BadRequestErrorProps) {
  const icon = (
    <svg 
      className="w-12 h-12 opacity-60" 
      fill="none" 
      stroke="currentColor" 
      viewBox="0 0 24 24"
    >
      <path 
        strokeLinecap="round" 
        strokeLinejoin="round" 
        strokeWidth={2} 
        d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" 
      />
    </svg>
  );

  const actions = (
    <div className="flex gap-3">
      {onRetry && (
        <Button 
          variant="outline" 
          onClick={onRetry}
          className="text-red-600 border-red-200 hover:bg-red-50"
        >
          다시 시도
        </Button>
      )}
      {showHomeButton && (
        <Button 
          onClick={() => window.location.href = '/'}
          className="bg-red-600 hover:bg-red-700"
        >
          홈으로 이동
        </Button>
      )}
    </div>
  );

  return (
    <ErrorMessage
      title="잘못된 요청입니다"
      message={message}
      icon={icon}
      action={actions}
      variant="default"
    />
  );
}