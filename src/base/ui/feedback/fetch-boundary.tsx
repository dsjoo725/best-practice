import type { ReactNode } from 'react';

type Props = {
  isFetching: boolean;
  fallback: ReactNode;
  children: ReactNode;
};
export const FetchBoundary = ({ children, fallback, isFetching }: Props) => {
  if (isFetching) return fallback;
  return children;
};
