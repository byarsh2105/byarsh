interface ButtonProps {
  children: React.ReactNode;
}

export default function Button({ children }: ButtonProps) {
  return (
    <button className="bg-primary text-primary-foreground rounded-md px-6 py-3 transition-all duration-300 hover:scale-105 hover:shadow-lg">
      {children}
    </button>
  );
}
