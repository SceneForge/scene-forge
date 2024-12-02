import { cn } from "@/lib";
import { Slot } from "@radix-ui/react-slot";
import { type ButtonHTMLAttributes, createElement, type Ref } from "react";

import { buttonVariants, type ButtonVariantsProps } from "./buttonVariants";

type ButtonAttributes = ButtonHTMLAttributes<HTMLButtonElement>
  & ButtonVariantsProps;

export type ButtonProps = {
  asChild?: boolean;
  ref?: Ref<HTMLButtonElement>;
} & ButtonAttributes;

const Button = ({
  asChild = false,
  className,
  ref,
  size,
  variant,
  ...props
}: ButtonProps) => {
  const buttonVariant = buttonVariants({
    className,
    size,
    variant,
  });

  const currentClassName = buttonVariant ? cn(buttonVariant) : className;

  return createElement(asChild ? Slot : "button", {
    ...props,
    className: currentClassName,
    ref,
  });
};

export default Button;
