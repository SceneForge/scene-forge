import { Tooltip, TooltipContent, TooltipTrigger } from "@/components";
import { useSidebar } from "@/hooks";
import { cn } from "@/lib";
import { Slot } from "@radix-ui/react-slot";
import { type ComponentProps } from "react";

import { sidebarMenuButtonVariants, type SidebarMenuButtonVariantsProps } from "./sidebarMenuButtonVariants";

export type SidebarMenuButtonProps = {
  asChild?: boolean;
  isActive?: boolean;
  tooltip?: ComponentProps<typeof TooltipContent> | string;
} & ComponentProps<"button"> & SidebarMenuButtonVariantsProps;

const SidebarMenuButton = ({
  asChild = false,
  className,
  isActive = false,
  ref,
  size = "default",
  tooltip,
  variant = "default",
  ...props
}: SidebarMenuButtonProps) => {
  const Component = asChild ? Slot : "button";
  const { isMobile, state } = useSidebar();

  const button = (
    <Component
      className={cn(sidebarMenuButtonVariants({ size, variant }), className)}
      data-active={isActive}
      data-sidebar="menu-button"
      data-size={size}
      ref={ref}
      {...props}
    />
  );

  if (!tooltip) {
    return button;
  }

  if (typeof tooltip === "string") {
    tooltip = {
      children: tooltip,
    };
  }

  return (
    <Tooltip>
      <TooltipTrigger asChild>{button}</TooltipTrigger>
      <TooltipContent
        align="center"
        hidden={state !== "collapsed" || isMobile}
        side="right"
        {...tooltip}
      />
    </Tooltip>
  );
};

export default SidebarMenuButton;
