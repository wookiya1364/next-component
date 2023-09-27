"use client";
import Button from "@components/atom/button";
import { Column } from "@components/atom/column";
import Label from "@components/atom/label";
import { Row } from "@components/atom/row";
import { VariantProps, cva } from "class-variance-authority";
import Image from "next/image";
import React from "react";
import { cn } from "utility/cn";

type ItemImageProps = {
  className?: string;
  children?: React.ReactNode;
  item: TAlbums;
};

type ItemDescriptProps = Omit<ItemImageProps, "item"> & {
  btnIcon: string;
  btnText: string;
  deliveryText: string;
};

const tabsVariants = cva("flex flex-col", {
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

export interface TabsProps
  extends React.ObjectHTMLAttributes<HTMLDivElement>,
    VariantProps<typeof tabsVariants> {
  as?: TContainer;
  useAnimation?: false | true;
}

const Itemlist = React.forwardRef<HTMLDivElement, TabsProps>(
  ({ children, as, className, ...props }, ref) => {
    const render = as || "article";
    return (
      <Column
        {...props}
        as={render}
        className={cn("w-full p-[15px]", className)}
        ref={ref}
        role="Itemlist"
        aria-orientation="horizontal"
        aria-label="Itemlist"
      >
        {children}
      </Column>
    );
  }
);

const ItemImage = ({ children, className, item }: ItemImageProps) => {
  if (!item) {
    return null;
  }
  // const random = Math.floor(Math.random() * 3) * 1000;
  // await new Promise((resolve) => setTimeout(resolve, random));
  return (
    <Column className="cursor-pointer">
      <Column className="w-full overflow-hidden">
        <Image
          className={cn(
            "w-auto h-auto cursor-pointer scale-100 transition-all duration-500  hover:duration-500 hover:ease-linear hover:scale-110 hover:transition-all",
            className
          )}
          // className={cn("transition-opacity opacity-0 duration-200", className)}
          // onLoadingComplete={(image) => image.classList.remove("opacity-0")}
          // src={item.url}
          priority={true}
          src={item.url}
          alt={item.title}
          width={250}
          height={320}
        />
      </Column>
      {children}
    </Column>
  );
};

const ItemDescript = ({
  children,
  className,
  btnIcon,
  btnText,
  deliveryText,
}: ItemDescriptProps) => {
  return (
    <React.Fragment>
      <Column className={cn("w-full overflow-auto block mt-[5px]", className)}>
        <Button
          className={cn(
            "w-full overflow-auto hover:bg-lime-400 border-[1px] rounded-[4px]",
            className
          )}
        >
          {btnText}
        </Button>
      </Column>

      <Column className="w-full items-start mt-[5px]">
        <Label className="mt-[5px]" as="p" size={"md"}>{deliveryText}</Label>
        <Label className="mt-[5px]" as="h1" size={"lg"}>{"[얌이밀] 아이 국 3종"}</Label>
        <Label className="mt-[5px]" as="p" size={"md"}>{"아이들 입맛에"}</Label>
        <Label className="mt-[5px]" as="p" size={"md"} variant={"cancel"}>{"7,800원"}</Label>
        <Row className="w-full justify-start mt-[5px]">
          <Label className="mt-[5px] text-orange-600" as="p" size={"lg"}>{"3%"}</Label>
          <Label className="mt-[5px] ml-[15px]" as="p" size={"lg"} intent={"bold"}>{"7,500원"}</Label>
        </Row>

      </Column>
    </React.Fragment>
  );
};

Itemlist.displayName = "Itemlist";

export { Itemlist, ItemImage, ItemDescript };
