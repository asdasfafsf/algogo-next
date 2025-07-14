import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const errorMessageVariants = cva(
  "flex flex-col items-center justify-center text-center space-y-4 p-8 rounded-2xl border",
  {
    variants: {
      variant: {
        default: "bg-red-50 border-red-200 text-red-600",
        warning: "bg-yellow-50 border-yellow-200 text-yellow-600",
        info: "bg-blue-50 border-blue-200 text-blue-600",
      },
      size: {
        sm: "p-4 space-y-2 text-sm",
        default: "p-8 space-y-4",
        lg: "p-12 space-y-6 text-lg",
      }
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

export interface ErrorMessageProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof errorMessageVariants> {
  title?: string;
  message: string;
  icon?: React.ReactNode;
  action?: React.ReactNode;
}

export function ErrorMessage({
  className,
  variant,
  size,
  title = "오류가 발생했습니다",
  message,
  icon,
  action,
  ...props
}: ErrorMessageProps) {
  const defaultIcon = (
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
        d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z" 
      />
    </svg>
  );

  return (
    <div className={cn(errorMessageVariants({ variant, size, className }))} {...props}>
      <div className="flex flex-col items-center space-y-3">
        {icon || defaultIcon}
        <div className="space-y-2">
          <h3 className="font-semibold text-lg">{title}</h3>
          <p className="text-sm opacity-80 max-w-md leading-relaxed">{message}</p>
        </div>
      </div>
      {action && (
        <div className="mt-4">
          {action}
        </div>
      )}
    </div>
  );
}