import * as ReactBase from 'react'
// tslint:disable-next-line:export-just-namespace
export = React
export as namespace React
declare namespace React {
    function useState<T>(initialState: T | (() => T)): [T, (newState: T) => void]
    function useEffect(
        create: () => void | (() => void),
        inputs?: ReadonlyArray<unknown>,
    ): void
    function useContext<T>(foo: ReactBase.Context<T>): T
    function useReducer<S, A>(
        reducer: (state: S, action: A) => S,
        initialState: S,
    ): [S, (action: A) => void]
    function useCallback<F extends (...args: never[]) => unknown>(
        callback: F,
        inputs?: ReadonlyArray<unknown>,
    ): F
    function useMemo<T>(create: () => T, inputs?: ReadonlyArray<unknown>): T
    function useRef<T extends unknown>(initialValue?: T): ReactBase.RefObject<T>
    function useImperativeMethods<T>(
        ref: ReactBase.Ref<T>,
        createInstance: () => T,
        inputs?: ReadonlyArray<unknown>,
    ): void
    const useMutationEffect: typeof useEffect
    const useLayoutEffect: typeof useEffect
}
