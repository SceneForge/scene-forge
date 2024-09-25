import { lazy } from "react";

export const Avatar = lazy(() => import("./Avatar"));
export type { AvatarProps } from "./Avatar";

export const AvatarFallback = lazy(() => import("./AvatarFallback"));
export type { AvatarFallbackProps } from "./AvatarFallback";

export const AvatarImage = lazy(() => import("./AvatarImage"));
export type { AvatarImageProps } from "./AvatarImage";
