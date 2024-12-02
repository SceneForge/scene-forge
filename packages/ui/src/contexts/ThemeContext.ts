import { createContext, type Dispatch, type SetStateAction } from "react";

export type ThemeContextType = {
  isMobile: boolean;
  setTheme: Dispatch<SetStateAction<string>>;
  theme?: string;
};

export const ThemeContext = createContext<ThemeContextType>({
  isMobile: false,
  setTheme: () => void 0,
});
