import { Skeleton } from "@/components";
import { cn } from "@/lib";
import { type ComponentProps, type CSSProperties, useMemo } from "react";

export type SidebarMenuSkeletonProps = {
  showIcon?: boolean;
} & ComponentProps<"div">;

const SidebarMenuSkeleton = ({
  className,
  ref,
  showIcon = false,
  ...props
}: SidebarMenuSkeletonProps) => {
  // Random width between 50 to 90%.
  const width = useMemo(() => {
    return `${Math.floor(Math.random() * 40) + 50}%`;
  }, []);

  return (
    <div
      className={cn("rounded-md h-8 flex gap-2 px-2 items-center", className)}
      data-sidebar="menu-skeleton"
      ref={ref}
      {...props}
    >
      {showIcon && (
        <Skeleton
          className="size-4 rounded-md"
          data-sidebar="menu-skeleton-icon"
        />
      )}
      <Skeleton
        className="h-4 flex-1 max-w-[--skeleton-width]"
        data-sidebar="menu-skeleton-text"
        style={
          {
            "--skeleton-width": width,
          } as CSSProperties
        }
      />
    </div>
  );
};

export default SidebarMenuSkeleton;
