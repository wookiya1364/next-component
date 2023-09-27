"use client";
import { VariantProps, cva } from "class-variance-authority";
import React from "react";
import { cn } from "utility/cn";

const columnVariants = cva("flex flex-col items-center", {
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
      default: [""],
      outline: [
        "bg-transparent",
        "border",
        "border-slate-200",
        "hover:bg-amber-100",
        "light:border-amber-700",
        "light:text-slate-100",
        "dark:bg-cyan-700",
        "dark:border-slate-700",
        "dark:text-slate-100",
        "dark:hover:bg-cyan-500",
      ],
      link: [
        "bg-transparent",
        "text-slate-900",
        "underline-offset-4",
        "hover:underline",
        "dark:text-slate-300",
      ],
    },
    size: {
      default: [""],
      sm: ["h-9", "px-2", "rounded-md"],
      md: ["h-10", "px-5", "rounded-md"],
      lg: ["h-11", "px-8", "rounded-md"],
      full: ["w-screen", "h-screen"],
      p_sm: ["p-2", "rounded-md"],
      p_md: ["p-5", "rounded-md"],
      p_lg: ["p-8", "rounded-md"],
    },
  },
  compoundVariants: [
    {
      intent: "primary",
      size: "default",
      className: "uppercase",
    },
  ],
  defaultVariants: {
    variant: "default",
    size: "default",
  },
});

export interface ColumnProps
  extends React.ObjectHTMLAttributes<HTMLDivElement>,
    VariantProps<typeof columnVariants> {
  as?: TContainer;
  useAnimation?: false | true;
}

const Column = React.forwardRef<HTMLDivElement, ColumnProps>(
  ({ className, children, as, intent, useAnimation, variant, size, ...props }, ref) => {
    const Component = as || "div";
    return (
      <Component
        className={cn(columnVariants({ intent, variant, size, className }))}
        ref={ref}
        {...props}
      >
        {children}
      </Component>
    );
  }
);
Column.displayName = "Column";

export { Column, columnVariants };
