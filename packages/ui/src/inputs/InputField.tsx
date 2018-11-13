import * as React from 'react'
import styled from 'styled-components'
import {Regular, RegularEditable} from '../styles/fonts'
import PrimaryButton from '../components/PrimaryButton'
// import {usePrevious} from '@local/react-fp'
import Input, {InputProps} from './Input'


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

export default ({label, onChange, value}: InputFieldProps) => {

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
