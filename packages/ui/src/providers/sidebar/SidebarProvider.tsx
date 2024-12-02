import {
  SIDEBAR_COOKIE_MAX_AGE,
  SIDEBAR_COOKIE_NAME,
  SIDEBAR_KEYBOARD_SHORTCUT,
} from "@/constants";
import { SidebarContext, type SidebarContextType } from "@/contexts";
import { useTheme } from "@/hooks";
import { setCookie } from "@/lib";
import { TooltipProvider } from "@/providers";
import {
  type PropsWithChildren,
  useCallback,
  useEffect,
  useMemo,
  useState,
} from "react";

export type SidebarProviderProps = PropsWithChildren<{
  defaultOpen?: boolean;
  onOpenChange?: (open: boolean) => void;
  open?: boolean;
}>;

const SidebarProvider = ({
  children,
  defaultOpen = true,
  onOpenChange: setOpenProperty,
  open: openProperty,
}: SidebarProviderProps) => {
  const { isMobile } = useTheme();
  const [openMobile, setOpenMobile] = useState(false);

  // This is the internal state of the sidebar.
  // We use openProp and setOpenProp for control
  // from outside the component.
  const [_open, _setOpen] = useState(defaultOpen);
  const open = openProperty ?? _open;
  const setOpen = useCallback(
    (value: ((value: boolean) => boolean) | boolean) => {
      const openState = typeof value === "function" ? value(open) : value;
      if (setOpenProperty) {
        setOpenProperty(openState);
      }
      else {
        _setOpen(openState);
      }

      setCookie(`${SIDEBAR_COOKIE_NAME}=${openState}; path=/; max-age=${SIDEBAR_COOKIE_MAX_AGE}`);
    },
    [setOpenProperty, open]
  );

  // Helper to toggle the sidebar.
  const toggleSidebar = useCallback(() => {
    return isMobile
      ? setOpenMobile(open => !open)
      : setOpen(open => !open);
  }, [isMobile, setOpen, setOpenMobile]);

  // Adds a keyboard shortcut to toggle the sidebar.
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (
        event.key === SIDEBAR_KEYBOARD_SHORTCUT
        && (event.metaKey || event.ctrlKey)
      ) {
        event.preventDefault();
        toggleSidebar();
      }
    };

    if (globalThis && globalThis instanceof Window) {
      globalThis.addEventListener("keydown", handleKeyDown);
      return () => {
        globalThis.removeEventListener("keydown", handleKeyDown);
      };
    }
  }, [toggleSidebar]);

  // We add a state so that we can do data-state="expanded"
  // or "collapsed".
  // This makes it easier to style the sidebar with Tailwind classes.
  const state = open ? "expanded" : "collapsed";

  const contextValue = useMemo<SidebarContextType>(() => ({
    isMobile,
    open,
    openMobile,
    setOpen,
    setOpenMobile,
    state,
    toggleSidebar,
  }), [
    state,
    open,
    setOpen,
    isMobile,
    openMobile,
    setOpenMobile,
    toggleSidebar,
  ]);

  return (
    <SidebarContext.Provider value={contextValue}>
      <TooltipProvider delayDuration={0}>
        {children}
      </TooltipProvider>
    </SidebarContext.Provider>
  );
};

export default SidebarProvider;
