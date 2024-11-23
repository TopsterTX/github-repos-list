import { useMemo, useRef } from 'react';
import { dequal } from 'dequal';

export const useDeepEqualMemo = <R = unknown, T = unknown>(
  callback: () => R,
  newDependencies: T[],
  compareFn?: (oldDeps: T[] | undefined, newDeps: T[]) => boolean,
): ReturnType<typeof callback> => {
  const dependencies = useRef<T[]>();

  const currentCompareFn = compareFn ? compareFn : dequal;

  if (!currentCompareFn(dependencies.current, newDependencies)) {
    dependencies.current = newDependencies;
  }

  return useMemo(callback, [dependencies.current]);
};
