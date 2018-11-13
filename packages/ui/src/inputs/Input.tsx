import * as React from 'react'
// import styled from 'styled-components'
import {OnChangeCallback} from './OnChangeCallback'

export type InputProps = {
    value?: string
    onChange?: OnChangeCallback
}

/*
const StyledInput = styled.input`
    background: #FFFFFF;
    border: 1px solid #D5D5D5;
    box-sizing: border-box;
    box-shadow: inset 0px 1px 2px rgba(0, 0, 0, 0.25);
    height: 30px;
`
*/
export default ({value, onChange}: InputProps) =>
    <input
        value={value}
        onChange={ e =>
            onChange && onChange(e.target.value, e)
        }
    />
