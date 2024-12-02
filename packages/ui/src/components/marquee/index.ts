import { lazy } from "react";

export const Marquee = lazy(() => import("./Marquee"));
export type { MarqueeProps } from "./Marquee";

export const MarqueeWrapper = lazy(() => import("./MarqueeWrapper"));
export type { MarqueeWrapperProps } from "./MarqueeWrapper";

export const MarqueeWrapperInsetShadow = lazy(() => import("./MarqueeWrapperInsetShadow"));
export type { MarqueeWrapperInsetShadowProps } from "./MarqueeWrapperInsetShadow";
