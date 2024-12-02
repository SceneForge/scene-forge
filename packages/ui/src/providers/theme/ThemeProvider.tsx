import { ThemeContext } from "@/contexts";
import { type PropsWithChildren, useCallback, useEffect, useState } from "react";

export type ThemeProviderProps = PropsWithChildren<{
  theme?: string;
}>;

const ThemeProvider = ({
  children,
  theme: defaultTheme,
}: ThemeProviderProps) => {
  const [theme, setTheme] = useState<string>(defaultTheme ?? "default");
  const [isMobile, setIsMobile] = useState<boolean>(false);

  const updateIsMobileState = useCallback(() => {
    if (globalThis && globalThis instanceof Window) {
      setIsMobile(globalThis.innerWidth < 768); // Update isMobile state
    }
  }, []);

  useEffect(() => {
    if (globalThis && globalThis instanceof Window) {
      updateIsMobileState();
      // Assuming mobile is less than 768px
      globalThis.addEventListener("resize", updateIsMobileState);
      return () => {
        globalThis.removeEventListener("resize", updateIsMobileState);
      };
    }
  }, [updateIsMobileState]);

  return (
    <ThemeContext.Provider
      value={{
        isMobile,
        setTheme,
        theme,
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeProvider;
