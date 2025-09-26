import { useCallback, useEffect, useState } from "react";
import { isFunction, type SetStateFn } from "./types";

interface useHistoryState<T> {
  history: T[];
  index: number;
}

interface UseHistoryStateParams<T> {
  defaultProp: T;
  capacity?: number;
}

export const useHistoryState = <T>({ defaultProp, capacity = 100 }: UseHistoryStateParams<T>) => {
  const [prop, setProp] = useState<useHistoryState<T>>({
    history: [defaultProp],
    index: 0,
  });

  useEffect(() => {
    setProp({
      history: [defaultProp],
      index: 0,
    });
  }, [defaultProp]);

  const value = prop.history[prop.index];

  const setValue = useCallback<SetStateFn<T>>(
    (nextValue) =>
      setProp(({ history, index }) => {
        const current = history[index];
        const value = isFunction(nextValue) ? nextValue(current) : nextValue;

        if (Object.is(current, value)) return { history, index };

        const next = [...history.slice(0, index + 1), value];

        if (capacity > 0 && next.length > capacity) {
          const overflow = next.length - capacity;
          const trimmed = next.slice(overflow);
          return { history: trimmed, index: trimmed.length - 1 };
        }

        return { history: next, index: next.length - 1 };
      }),
    [capacity]
  );

  const undo = useCallback(
    () =>
      setProp(({ history, index }) => ({
        history,
        index: Math.max(0, index - 1),
      })),
    []
  );

  const redo = useCallback(
    () =>
      setProp(({ history, index }) => ({
        history,
        index: Math.min(history.length - 1, index + 1),
      })),
    []
  );

  const reset = useCallback(
    (next?: T) =>
      setProp({
        history: [next ?? defaultProp],
        index: 0,
      }),
    [defaultProp]
  );

  const canUndo = prop.index > 0;
  const canRedo = prop.index < prop.history.length - 1;

  return [value, setValue, { redo, undo, reset, canUndo, canRedo }] as const;
};
