type ButtonProps = {
  children: React.ReactNode;
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

export function Button({ children, ...props }: ButtonProps) {
  return (
    <button
      className="border p-2 rounded-lg disabled:text-gray-500 hover:scale-105"
      {...props}
    >
      {children}
    </button>
  );
}
