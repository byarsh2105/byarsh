import { ButtonHTMLAttributes } from 'react';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
}

export default function Button({
  children,
  className = '',
  ...props
}: ButtonProps) {
  return (
    <button
      {...props}
      className={`bg-primary text-primary-foreground inline-flex h-12 items-center justify-center gap-2 rounded-[8px] px-6 text-[13px] font-medium transition-all duration-300 hover:scale-[1.02] hover:shadow-md ${className} `}
    >
      {children}
    </button>
  );
}
