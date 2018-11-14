import * as React from 'react'



type CounterProps = {
    value?: number
}


const increment = v => () => v + 1

export  function Counter(props: CounterProps) {

    const [value, setValue] = React.useState(props.value || 0)

    return  <div onClick={() => setValue(increment(value))}>
                {value}
            </div>

}
