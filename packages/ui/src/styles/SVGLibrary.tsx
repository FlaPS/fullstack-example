// tslint:disable-next-line
import * as React from 'react'
import {arrify, isFrontend} from '@sha/utils'

export type SvgIconProps =
    & React.SVGProps<SVGSVGElement>
    & {
        fill?: string
    }

const Icon =  ({fill, style, ...other}: SvgIconProps) =>
    <svg style={{...style, fill}} {...other}/>


const makeIcon = (...paths: Array<JSX.Element>) =>
    ({children, ...props}: SvgIconProps) => isFrontend()
        ? <Icon {...props} children={arrify(paths).concat(children as JSX.Element[])} />
        : <span>Just for test</span>

const makeLargeIcon =
    (size: number, sizeY: number = size) =>
        (...paths: Array<React.ReactNode>) =>
            ({children, ...props}: SvgIconProps) => isFrontend()
                ? (
                    <Icon
                        viewBox={`0 0 ${size} ${sizeY}`}
                        style={{width: `${size}px`, height: `${sizeY}px`}}
                        children={arrify(paths).concat(children)}
                        {...props}
                    />
                )
                : <span>here we go</span>

export const SVGLibrary = {
    /* tslint:disable:jsx-self-close max-line-length */
    bakcIcon: (props: SvgIconProps) =>
                <svg width='24' height='13' viewBox='0 0 24 13' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
                    <line x1='24' y1='6.5' x2='4' y2='6.5' stroke='black'/>
                    <path d='M8.52372e-07 6.5L6.75 0.870835L6.75 12.1292L8.52372e-07 6.5Z' fill='#1A252A'/>
                </svg>,

}

export default SVGLibrary
