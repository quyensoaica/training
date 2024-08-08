import "./button.scss";
interface ButtonProps {
  children: React.ReactNode;
  className?: string;
  size?: "small" | "medium" | "large";
  variant?: "primary" | "secondary" | "outline" | "filled";
  rounded?: boolean;
}
const Button = ({ children, className, size = "medium", rounded = true, variant = "filled" }: ButtonProps) => {
  const buttonClass = `button-component ${size} ${!rounded && "no-rounded"} ${variant}`;

  return (
    <button className={`button-29 ${buttonClass} ${className}`}>
      <span>{children}</span>
    </button>
  );
};
export default Button;
