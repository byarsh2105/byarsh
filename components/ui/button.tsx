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
      className={`bg-primary text-primary-foreground inline-flex items-center justify-center gap-2 rounded-md px-6 py-3 font-medium transition-all duration-300 hover:scale-105 hover:shadow-lg ${className} `}
    >
      {children}
    </button>
  );
}
