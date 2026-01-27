import React from "react";

interface ButtonProps {
  id?: string;
  className?: string;
  onClick?: () => void;
  ariaLabel?: string;
  type?: "button" | "submit" | "reset";
  disabled?: boolean;
  children: React.ReactNode;
  style?: React.CSSProperties;
}

const Button: React.FC<ButtonProps> = ({
  id,
  className,
  onClick,
  ariaLabel,
  type = "button",
  disabled = false,
  children,
  style,
}) => {
  return (
    <button
      id={id}
      className={className}
      onClick={onClick}
      aria-label={ariaLabel}
      type={type}
      disabled={disabled}
      style={style}
    >
      {children}
    </button>
  );
};

export default Button;
