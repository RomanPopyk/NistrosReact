import React from "react";
import styles from "./Button.module.css";

interface ButtonProps {
  id?: string;
  className?: string;
  onClick?: () => void;
  ariaLabel?: string;
  type?: "button" | "submit" | "reset";
  disabled?: boolean;
  children: React.ReactNode;
  isActive?: boolean;
}

const Button: React.FC<ButtonProps> = ({
  id,
  className,
  onClick,
  ariaLabel,
  type = "button",
  disabled = false,
  children,
  isActive = false,
}) => {
  const buttonClasses = [
    styles.button,
    isActive ? styles.active : "",
    className || "",
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <button
      id={id}
      className={buttonClasses}
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
