import { useCallback, useEffect, useInsertionEffect, useRef, useState } from "react";

type ChangeHandler<T> = (state: T) => void;
type SetStateFn<T> = React.Dispatch<React.SetStateAction<T>>;

interface UseControllableStateParams<T> {
  prop?: T;
  defaultProp: T;
  onChange?: ChangeHandler<T>;
}

export const useControllableState = <T>({
  prop,
  defaultProp,
  onChange = () => {},
}: UseControllableStateParams<T>): [T, SetStateFn<T>] => {
  const [uncontrolledProp, setUncontrolledProp, onChangeRef] = useUncontrolledState({
    defaultProp,
    onChange,
  });

  const isControlled = prop !== undefined;
  const value = isControlled ? prop : uncontrolledProp;

  const setValue = useCallback<SetStateFn<T>>(
    (nextValue) => {
      if (isControlled) {
        const value = isFunction(nextValue) ? nextValue(prop) : nextValue;
        if (value !== prop) {
          onChangeRef.current?.(value);
        }
      } else {
        setUncontrolledProp(nextValue);
      }
    },
    [isControlled, prop, setUncontrolledProp, onChangeRef]
  );

  return [value, setValue];
};

const useUncontrolledState = <T>({
  defaultProp,
  onChange,
}: Omit<UseControllableStateParams<T>, "prop">): [
  value: T,
  setValue: React.Dispatch<React.SetStateAction<T>>,
  onChangeRef: React.RefObject<ChangeHandler<T> | undefined>
] => {
  const [value, setValue] = useState(defaultProp);
  const prevValueRef = useRef(value);

  const onChangeRef = useRef(onChange);
  useInsertionEffect(() => {
    onChangeRef.current = onChange;
  }, [onChange]);

  useEffect(() => {
    if (prevValueRef.current !== value) {
      onChangeRef.current?.(value);
      prevValueRef.current = value;
    }
  }, [value, prevValueRef]);

  return [value, setValue, onChangeRef];
};

function isFunction(value: unknown) {
  return typeof value === "function";
}
