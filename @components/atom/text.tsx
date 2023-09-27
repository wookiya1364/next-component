"use client";
import { cva, type VariantProps } from "class-variance-authority";
import React from "react";
import { cn } from "utility/cn";

const textVariants = cva("text-[1rem]", {
  variants: {
    intent: {
      primary: ["text-primary", "font-bold"],
      secondary: ["text-secondary", "text-red-800"],
    },
    size: {
      xs: ["text-xs"],
      sm: ["text-sm"],
      md: ["text-md"],
      lg: ["text-lg"],
      xl: ["text-xl"],
    },
  },
  compoundVariants: [{}],
  defaultVariants: {},
});

type TextProps<T extends React.ElementType> = {
  as?: "p" | "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
  href?: string;
  children?: React.ReactNode;
  useAnimation?: boolean;
} & Omit<React.ComponentPropsWithRef<T>, "as" | "children">
& VariantProps<typeof textVariants>;

const Text = <T extends React.ElementType>(
  { as, href, children, className, variant, useAnimation, ...rest }: TextProps<T>,
  ref: React.ForwardedRef<React.ComponentPropsWithRef<T>["ref"]>,
) => {
  const Component = as || "p";
  if (useAnimation) {
  }
  return (
    <Component
      className={cn(textVariants({ className }))}
      ref={ref}
      href={href}
      {...rest}
    >
      {children}
    </Component>
  );
};

export default React.forwardRef(Text);
