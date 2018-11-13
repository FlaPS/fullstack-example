import * as React from 'react'
import {add} from 'ramda'
import styled from 'styled-components'


type CounterProps = {
    value?: number
}


const increment = add(1)

const FontRoboto = styled.span`
    font-family: 'Roboto', sans-serif;
`

export default (props: CounterProps) => {

    const [value, setValue] = React.useState(props.value || 0)

    return  <div onClick={() => setValue(increment(value))}>
                <FontRoboto>{value}</FontRoboto>
            </div>

}
