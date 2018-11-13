import * as React from 'react'

export type OnChangeCallback<T = string, E = Element> =
    (value: T, e?: React.ChangeEvent<E>) => any


export default <T = string>(onChangeCallback: OnChangeCallback<T>) =>
    <E = Element>(e: React.ChangeEvent<E>) =>
        onChangeCallback && onChangeCallback(e.target['value'], e as any)
