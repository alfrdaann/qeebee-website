import React from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  href?: string;
  variant?: "primary" | "secondary" | "outline" | "ghost" | "whatsapp";
  size?: "sm" | "md" | "lg";
  fullWidth?: boolean;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
  target?: string;
  rel?: string;
}

export const Button: React.FC<ButtonProps> = ({
  children,
  className,
  variant = "primary",
  size = "md",
  fullWidth = false,
  leftIcon,
  rightIcon,
  href,
  disabled,
  ...props
}) => {
  const baseStyles =
    "inline-flex items-center justify-center font-medium rounded-lg transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none select-none cursor-pointer";

  const variants = {
    primary:
      "bg-[#FF6A00] text-white hover:bg-[#E55F00] active:bg-[#CC5400] focus-visible:ring-[#FF6A00]",
    secondary:
      "bg-[#111111] text-white hover:bg-[#262626] active:bg-[#000000] focus-visible:ring-[#111111]",
    outline:
      "border border-[#E5E5E5] bg-white text-[#111111] hover:bg-[#F5F5F5] hover:border-[#CCCCCC] focus-visible:ring-[#FF6A00]",
    ghost:
      "text-[#111111] hover:bg-[#F5F5F5] active:bg-[#EBEBEB] focus-visible:ring-[#FF6A00]",
    whatsapp:
      "bg-[#25D366] text-white hover:bg-[#20ba5a] active:bg-[#1da851] focus-visible:ring-[#25D366]",
  };

  const sizes = {
    sm: "text-xs px-3 py-1.5 gap-1.5 h-8",
    md: "text-sm px-4 py-2 gap-2 h-10",
    lg: "text-base px-6 py-3 gap-2.5 h-12",
  };

  const buttonClasses = cn(
    baseStyles,
    variants[variant],
    sizes[size],
    fullWidth && "w-full",
    className
  );

  const content = (
    <>
      {leftIcon && <span className="inline-flex shrink-0">{leftIcon}</span>}
      <span>{children}</span>
      {rightIcon && <span className="inline-flex shrink-0">{rightIcon}</span>}
    </>
  );

  if (href) {
    const isExternal = href.startsWith("http") || href.startsWith("https") || href.startsWith("wa.me");
    if (isExternal) {
      return (
        <a
          href={href}
          className={buttonClasses}
          target={props.target || "_blank"}
          rel={props.rel || "noopener noreferrer"}
        >
          {content}
        </a>
      );
    }
    return (
      <Link href={href} className={buttonClasses}>
        {content}
      </Link>
    );
  }

  return (
    <button className={buttonClasses} disabled={disabled} {...props}>
      {content}
    </button>
  );
};

export default Button;
