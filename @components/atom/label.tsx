"use client";
import { VariantProps, cva } from "class-variance-authority";
import React from "react";
import { cn } from "utility/cn";

const labelVariants = cva(
  "text-[10px] font-medium peer-disabled:cursor-not-allowed peer-disabled:opacity-70",
  {
    variants: {
      intent: {
        primary: [""],
        secondary: ["bg-white", "text-gray-800"],
        red: ["bg-red-600"],
        blue: ["bg-blue-600"],
        cyan: ["bg-cyan-600"],
        blue_gradient: ["blue-gradient"],
        bold: ["font-bold"],
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
        cancel: [
          "line-through"
        ]
      },
      size: {
        default: [""],
        sm: ["text-[12px]"],
        md: ["text-[15px]"],
        lg: ["text-[20px]"],
        full: ["w-screen", "h-screen"],
        p_sm: ["p-2"],
        p_md: ["p-5"],
        p_lg: ["p-8"],
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
  }
);

export interface LabelProps
  extends React.ObjectHTMLAttributes<HTMLDivElement>,
    VariantProps<typeof labelVariants> {
  as?: TLabel;
  useAnimation?: false | true;
}

const Label = React.forwardRef<HTMLDivElement, LabelProps>(
  (
    { className, children, as, intent, variant, useAnimation, size, ...props },
    ref
  ) => {
    const Component = as || "p";
    return (
      <Component
        className={cn(labelVariants({ intent, variant, size, className }))}
        ref={ref}
        {...props}
      >
        {children}
      </Component>
    );
  }
);

Label.displayName = "Label";

export default Label;
