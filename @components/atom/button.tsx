"use client";
import { VariantProps, cva } from "class-variance-authority";
import React from "react";
import { cn } from "utility/cn";

const buttonVariants = cva(
  `inline-flex items-center justify-center rounded-md
  text-sm font-medium 
  ring-offset-background transition-colors 
  focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 
  disabled:pointer-events-none disabled:opacity-50
  `,
  // "",
  {
    variants: {
      intent: {
        primary: [""],
        secondary: ["bg-white", "text-gray-800"],
        red: ["bg-red-600"],
        blue: ["bg-blue-600"],
        cyan: ["bg-cyan-600"],
        blue_gradient: ["blue-gradient"],
      },
      variant: {
        default: "bg-primary text-primary-foreground hover:bg-primary/90",
        destructive:
          "bg-destructive text-destructive-foreground hover:bg-destructive/90",
        outline:
          "border border-input bg-background hover:bg-accent hover:text-accent-foreground",
        secondary:
          "bg-secondary text-secondary-foreground hover:bg-secondary/80",
        ghost: "hover:bg-accent hover:text-accent-foreground",
        link: "text-primary underline-offset-4 hover:underline",
      },
      size: {
        default: "h-10 px-4 py-2",
        sm: "h-9 rounded-md px-3",
        lg: "h-11 rounded-md px-8",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  as?: "button" | "span";
  useAnimation?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    { className, children, as, intent, variant, useAnimation, size, ...props },
    ref
  ) => {
    const Component = as || "button";
    return (
      <Component
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      >
        {children}
      </Component>
    );
  }
);
Button.displayName = "Button";

export default Button;
export { buttonVariants };
