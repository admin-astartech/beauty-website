export enum ButtonType{
    PRIMARY = "primary",
    SECONDARY = "secondary",
}

interface ButtonProps {
  children: React.ReactNode;
  onClick?: (e: React.MouseEvent<HTMLAnchorElement>) => void;
  className?: string;
  href?: string;
  type?: ButtonType;
}
export function Button({ children, onClick, className, href, type = ButtonType.PRIMARY }: ButtonProps) {
  return (
    <a href={href} 
    className={`text-nowrap  ${type === ButtonType.PRIMARY ? "bg-button-primary/90 text-slate-100!" : "bg-button-secondary! text-button-primary!"} 
    px-8 py-3 rounded-md transition-all duration-300 transform hover:scale-102 flex items-center justify-center space-x-2 text-lg font-bold!
     shadow-xl drop-shadow-xl! ${className}`} onClick={onClick ? (e) => onClick(e) : undefined}>
      {children}
    </a>
  );
}