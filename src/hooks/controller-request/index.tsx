import { useCallback, useRef } from 'react';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
type AnyFunction = (...args: any[]) => any;
type RequestFunction<T extends AnyFunction> = (
  ...args: Parameters<T>
) => ReturnType<T>;
type AbortHandler = () => void;

export function useControlledRequest<T extends RequestFunction<T>>(
  originalRequest: T,
): [RequestFunction<T>, AbortHandler] {
  const controller = useRef(new AbortController());

  const startRequest = useCallback(
    (...args: Parameters<typeof originalRequest>) => {
      const requestArgs = [...args, controller.current.signal] as Parameters<
        typeof originalRequest
      >;
      return originalRequest(...requestArgs);
    },
    [originalRequest],
  );

  const abortRequest = useCallback(() => {
    controller.current.abort();

    controller.current = new AbortController();
  }, []);

  return [startRequest, abortRequest];
}
