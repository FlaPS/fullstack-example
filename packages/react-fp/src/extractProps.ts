
type Fn1<T> = (props: T, ...arg: any[]) => any

export type ExtractProps<TComponent> =
    TComponent extends React.ComponentType<infer TProps>
        ? TProps
        : TComponent extends Fn1<infer T>
            ? T
            : TComponent
