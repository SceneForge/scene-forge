import { lazy } from "react";

export const NavigationMenu = lazy(() => import("./NavigationMenu"));
export type { NavigationMenuProps } from "./NavigationMenu";

export const NavigationMenuContent = lazy(() => import("./NavigationMenuContent"));
export type { NavigationMenuContentProps } from "./NavigationMenuContent";

export const NavigationMenuIndicator = lazy(() => import("./NavigationMenuIndicator"));
export type { NavigationMenuIndicatorProps } from "./NavigationMenuIndicator";

export const NavigationMenuItem = lazy(() => import("./NavigationMenuItem"));
export type { NavigationMenuItemProps } from "./NavigationMenuItem";

export const NavigationMenuLink = lazy(() => import("./NavigationMenuLink"));
export type { NavigationMenuLinkProps } from "./NavigationMenuLink";

export const NavigationMenuList = lazy(() => import("./NavigationMenuList"));
export type { NavigationMenuListProps } from "./NavigationMenuList";

export const NavigationMenuTrigger = lazy(() => import("./NavigationMenuTrigger"));
export type { NavigationMenuTriggerProps } from "./NavigationMenuTrigger";
export { navigationMenuTriggerStyle } from "./NavigationMenuTrigger";

export const NavigationMenuViewport = lazy(() => import("./NavigationMenuViewport"));
export type { NavigationMenuViewportProps } from "./NavigationMenuViewport";
