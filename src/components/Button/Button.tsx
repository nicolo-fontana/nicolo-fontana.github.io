import "./Button.scss";

interface ButtonProps {
  children?: React.ReactNode;
  type?: "primary" | "default" | "ghost";
  onClick?: () => void;
}

const Button: React.FC<ButtonProps> = ({
  children,
  type = "primary",
  onClick,
}) => {
  return (
    <button className={`button ${type}`} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
