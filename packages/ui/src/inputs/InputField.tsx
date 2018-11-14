import * as React from 'react'
import styled from 'styled-components'
import {Regular, RegularEditable} from '../styles/fonts'
import PrimaryButton from '../buttons/PrimaryButton'
// import {usePrevious} from '@local/react-fp'
import Input, {InputProps} from './Input'
import {Pure} from '@sha/react-fp'


type InputFieldProps =
    & InputProps
    & {
        label: string
    }

const FieldDiv = styled.div`
  display: flex;
  align-items: center;
  > *{
    margin-right: 10px;
  }

`

export default Pure<InputFieldProps>()
    .addState<{inputValue?: string, editMode?: boolean}>()
    .of( props => {
            const {label, onChange, editMode, inputValue, setState, value} = props
            const current =  inputValue === undefined  ? value : inputValue
            return editMode
                ?   <FieldDiv>
                        <Regular>{label}:</Regular>
                        <Input
                            value={current}
                            onChange={(inputValue: string) => setState({inputValue})}
                        />
                        <PrimaryButton
                            onClick={() => {
                                setState({editMode: false})
                                return onChange && onChange(current || 'Unknown')
                            }}
                        >
                            Submit
                        </PrimaryButton>
                    </FieldDiv>
                :   <RegularEditable onClick={() => setState({editMode: true})}>{current}</RegularEditable>
        },
    )



/*
({label, onChange, value}: InputFieldProps) => {
/8
    const [stateValue, setValue] = React.useState(value)

    const [editMode, setEditMode] = React.useState(false)

    const ref = React.useRef(value)
    React.useEffect(() => {
        ref.current = value || ''
    })

    const prevValue = ref.current
    if (prevValue !== value)
        setValue(value)

    const onSubmit = () => {
        if (onChange)
            onChange(stateValue || '')
        setEditMode(false)
    }

    const swithToEdit = () => {
        setEditMode(true)
    }

    return editMode
            ?   <FieldDiv>
                    <Regular>{label}:</Regular>
                    <Input
                        value={stateValue}
                        onChange={(value: string) => setValue(value)}
                    />
                    <PrimaryButton onClick={onSubmit}>
                        Submit
                    </PrimaryButton>
                </FieldDiv>
            :   <RegularEditable onClick={swithToEdit}>{stateValue}</RegularEditable>
}
*/
