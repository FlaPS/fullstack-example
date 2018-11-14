import * as React from 'react'
import * as TL from 'typelevel-ts'
import * as R from 'ramda'
type Predicate<T> = (value: T) => boolean | any


import {default as renderChildren, Renderable} from './renderChildren'


interface Pattern<P>  {
    matcher: Predicate<P>,
    Comp: Renderable<Partial<P>>
}

type Optional<T extends object, K extends keyof T> = TL.Omit<T, K> & Partial<{[key in K]: T[K]}>

const hasDisplayName = <P>(value: Renderable<P>): value is React.ComponentType<P> =>
    value !== undefined && value !== null && value['displayName'] !== undefined


type CaseRender<P extends object> = React.ComponentType<P> & {
    match: <I>(
        cond: Predicate<P & I> | Partial<P & I>,
        component: Renderable<Partial<P & I>>,
    ) => CaseRender<P & Partial<I>>,
    isNil: <K extends keyof P, N extends Partial<P>>(
        property: K,
        component: Renderable<N>,
    ) => CaseRender<Optional<P, K>>

    isNilOrEmpty: <K extends keyof P, N extends Partial<P>>(
        property: K,
        component: Renderable<N>,
    ) => CaseRender<Optional<P, K>>

    isEmpty: (property: keyof P, component: Renderable<Partial<P>>) =>
        CaseRender<P>
}
/**
 *
 * @param {"react".ComponentType<P>} Target to render in case of no match
 * @param {Array<Pattern<Partial<P>>>} patterns
 * @returns Wrapped component with conditional rendering
 */
function caseRender<P extends object>( Target: Renderable<P>, patterns: Pattern<Partial<P>>[] = []): CaseRender<P> {
    if (!patterns.length )
        patterns = [{ matcher: R.T as any as Predicate<P>, Comp: Target }]


    const matchPredicate = <I>(predicate: Predicate<P & I>, component: Renderable<Partial<P & I>>) =>
        caseRender<P & Partial<I>>(
            Target as any as Renderable<P & Partial<I>>,
            [...patterns,
                {
                    matcher: predicate,
                    Comp: component,
                },
            ],
        )

    const matchProps = <I>(props: Partial<P & I>, component: Renderable<Partial<P & I>>) =>
        matchPredicate(R.whereEq(props), component)

    const match = <I>(cond: Predicate<P & I> | Partial<P & I>, component: Renderable<Partial<P & I>>) =>
        typeof cond === 'function'
            ? matchPredicate(cond, component)
            : matchProps(cond, component)

    const isNil = <K extends keyof P, N extends Partial<P>>(property: K, component: Renderable<N>) =>
        caseRender<Optional<P, K>>(
            Target as any as React.ComponentType<Optional<P, K>>,
            [
                ...patterns,
                {
                    matcher: p => R.isNil(p[property]),
                    Comp: component,
                } as any as Pattern<Optional<P, K>>,
            ],
        )

    const isEmpty = (property: keyof P, component: Renderable<Partial<P>>) =>
        match(p => R.isEmpty(p[property]), component)

    const isNilOrEmpty = <K extends keyof P, N extends Partial<P>>(property: K, component: Renderable<N>) =>
        caseRender<Optional<P, K>>(
            Target as any as React.ComponentType<Optional<P, K>>,
            // @ts-ignore
            [...patterns,
                {
                    matcher: p => R.isEmpty(p[property]) || R.isNil(p[property]),
                    Comp: component,
                } as any as Pattern<Optional<P, K>>,
            ],
        )

    const Comp =  ((p: P, ctx) => {
        for (let i = patterns.length - 1; i >= 0; i--)
            if (patterns[i].matcher(p))
                return renderChildren(patterns[i].Comp, p)

        return null
    }) as any as  React.StatelessComponent<P>


    Comp.displayName = Target
        ? 'CaseRender(' + hasDisplayName(Target) ? Target['displayName'] : 'Renderable' + ')'
        : 'CaseRender'

    return Object.assign(
        Comp,
        {
            match,
            isNil,
            isEmpty,
            isNilOrEmpty,
        },
    )
}

export default caseRender
