
import styled from 'styled-components'
import * as React from 'react'
import colors from '../styles/colors'
import { Renderable } from '@sha/react-fp'

type CSSMetric = number | string

export type BoxProps = {
    gap?: CSSMetric
    width?: CSSMetric
    height?: CSSMetric
    stretch?: boolean
    marginAuto?: boolean
    reversed?: boolean
    bottomBorder?: boolean
    topBorder?: boolean
    children: Renderable<any>
}


const metrics = (prop: any, cssProp?: any)  => (props: any) =>
    props[prop] &&
    (cssProp || prop) + ': ' + (
        isNaN(props[prop])
            ? props[prop]
            : props[prop] + 'px'
    ) + ';'

const getMarginAuto = (props: BoxProps) =>
    props.marginAuto
        ? 'margin: auto;'
        : ''

const widthMetric = (props: BoxProps) =>
    props.stretch
        ? 'width: 100%;'
        : metrics('width')(props)


export const VBox: React.SFC<BoxProps> =
    styled<BoxProps, 'div'>('div')`
    box-sizing: border-box;
    display:flex;
    flex-direction: column;
    border-bottom: ${props => props.bottomBorder ? `1px solid ${colors.LIGHT_BORDER_GRAY}` : 'none'};
    ${ widthMetric }
    ${ metrics('height') }
    ${ getMarginAuto }
    > div:not(:first-child){
     ${ metrics('gap',  'margin-top') };
    }
    > button:not(:first-child){
     ${ metrics('gap',  'margin-top') };
    }
` as any


export const HBox: React.SFC<BoxProps> =
    styled<BoxProps, 'div'>('div')`
    box-sizing: border-box;
    display: flex;
    flex-direction: ${ props => props.reversed ? 'row-reverse' : 'row'};
    border-top: ${props => props.topBorder ? `1px solid ${colors.LIGHT_BORDER_GRAY}` : 'none'};
    border-bottom: ${props => props.bottomBorder ? `1px solid ${colors.LIGHT_BORDER_GRAY}` : 'none'};
    ${ widthMetric }
    ${ metrics('height') }
    ${ getMarginAuto }
    > div:not(:first-child){
        ${ metrics('gap', 'margin-left') }
    }
    > button:not(:first-child){
        ${ metrics('gap', 'margin-left') }
    }
` as any
