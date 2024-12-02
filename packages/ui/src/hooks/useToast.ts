import type { ToastAction, ToastProps } from "@/components";

import { TOAST_LIMIT, TOAST_REMOVE_DELAY } from "@/constants";
import { type ReactElement, type ReactNode, useCallback, useEffect, useState } from "react";

type ToasterToast = {
  action?: ReactElement<typeof ToastAction>;
  description?: ReactNode;
  id: string;
  title?: ReactNode;
} & ToastProps;

type State = {
  toasts: ToasterToast[];
};

type Action =
  | {
    toast: Partial<ToasterToast>;
    type: ActionType.UpdateToast;
  }
  | {
    toast: ToasterToast;
    type: ActionType.AddToast;
  }
  | {
    toastId?: ToasterToast["id"];
    type: ActionType.DismissToast;
  }
  | {
    toastId?: ToasterToast["id"];
    type: ActionType.RemoveToast;
  };

enum ActionType {
  AddToast = "ADD_TOAST",
  DismissToast = "DISMISS_TOAST",
  RemoveToast = "REMOVE_TOAST",
  UpdateToast = "UPDATE_TOAST",
};

let count = 0;

const genId = () => {
  count = (count + 1) % Number.MAX_SAFE_INTEGER;
  return count.toString();
};

const toastTimeouts = new Map<string, ReturnType<typeof setTimeout>>();

const addToRemoveQueue = (toastId: string) => {
  if (toastTimeouts.has(toastId)) {
    return;
  }

  const timeout = setTimeout(() => {
    toastTimeouts.delete(toastId);
    dispatch({
      toastId: toastId,
      type: ActionType.RemoveToast,
    });
  }, TOAST_REMOVE_DELAY);

  toastTimeouts.set(toastId, timeout);
};

const reducer = (state: State, action: Action): State => {
  switch (action.type) {
    case ActionType.AddToast:
      return {
        ...state,
        toasts: [action.toast, ...state.toasts].slice(0, TOAST_LIMIT),
      };

    case ActionType.UpdateToast:
      return {
        ...state,
        toasts: state.toasts.map(t =>
          t.id === action.toast.id ? { ...t, ...action.toast } : t),
      };

    case ActionType.DismissToast: {
      const { toastId } = action;
      if (toastId) {
        addToRemoveQueue(toastId);
      }
      else {
        for (const toast of state.toasts) {
          addToRemoveQueue(toast.id);
        }
      }

      return {
        ...state,
        toasts: state.toasts.map(t =>
          t.id === toastId || toastId === undefined
            ? {
              ...t,
              open: false,
            }
            : t),
      };
    }
    case ActionType.RemoveToast:
      if (action.toastId === undefined) {
        return {
          ...state,
          toasts: [],
        };
      }
      return {
        ...state,
        toasts: state.toasts.filter(t => t.id !== action.toastId),
      };
  }
};

const listeners: ((state: State) => void)[] = [];

let memoryState: State = { toasts: [] };

const dispatch = (action: Action) => {
  memoryState = reducer(memoryState, action);
  for (const listener of listeners) {
    listener(memoryState);
  }
};

export type ToastObjectType = Omit<ToasterToast, "id">;

export const toast = ({ ...props }: ToastObjectType) => {
  const id = genId();

  const update = (props: ToasterToast) =>
    dispatch({
      toast: { ...props, id },
      type: ActionType.UpdateToast,
    });

  const dismiss = () => {
    return dispatch({
      toastId: id,
      type: ActionType.DismissToast,
    });
  };

  dispatch({
    toast: {
      ...props,
      id,
      onOpenChange: (open) => {
        if (!open) dismiss();
      },
      open: true,
    },
    type: ActionType.AddToast,
  });

  return {
    dismiss,
    id: id,
    update,
  };
};

export const useToast = () => {
  const [state, setState] = useState<State>(memoryState);
  const dismiss = useCallback((toastId?: string) => {
    return dispatch({
      toastId,
      type: ActionType.DismissToast,
    });
  }, []);

  useEffect(() => {
    listeners.push(setState);
    return () => {
      const index = listeners.indexOf(setState);
      if (index > -1) {
        listeners.splice(index, 1);
      }
    };
  }, [state]);

  return {
    ...state,
    dismiss,
    toast,
  };
};
