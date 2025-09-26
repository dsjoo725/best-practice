export type ChangeHandler<T> = (state: T) => void;
export type SetStateFn<T> = React.Dispatch<React.SetStateAction<T>>;

export function isFunction(value: unknown) {
  return typeof value === "function";
}
