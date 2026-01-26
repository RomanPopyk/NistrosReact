import React from "react";

interface ButtonProps {
  id?: string;
  className?: string;
  onClick?: () => void;
  ariaLabel?: string;
  type?: "button" | "submit" | "reset";
  disabled?: boolean;
  children: React.ReactNode;
}

const Button: React.FC<ButtonProps> = ({
  id,
  className,
  onClick,
  ariaLabel,
  type = "button",
  disabled = false,
  children,
}) => {
  return (
    <button
      id={id}
      className={className}
      onClick={onClick}
      aria-label={ariaLabel}
      type={type}
      disabled={disabled}
    >
      {children}
    </button>
  );
};

export default Button;
