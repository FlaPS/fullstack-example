import * as React from 'react'
import {Profile} from '@local/client-store'
import {OnChangeCallback} from '../inputs/OnChangeCallback'
import styled from 'styled-components'
import UserHeader from './UserHeader'
import InputField from '../inputs/InputField'
import KnowledgeView from './KnowledgeView'
import {ExtractProps} from '@sha/react-fp'
import BackButton from '../buttons/BackButton'

type ProfileViewProps = {
    value: Profile
    onBack?: (...args: any[]) => any
    onChange?: OnChangeCallback<Profile>
}

const Layout = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 80px;

  > *:first-child{
    margin-bottom: 10px;
  }
  > *:not(:first-child){
    margin-top: 20px;
  }
`

const Divider = styled.div`
  max-width: 500px;
  width: 100%;
  height: 1px;
  margin-left: 20px;
  margin-right: 20px;
  background-color: #D5D5D5;
`

export default ({value, onChange, ref, onBack, ...rest}: ProfileViewProps & ExtractProps<typeof Layout>) =>
    <Layout {...rest} >
        <BackButton onClick={onBack}/>
        <UserHeader
            url={value.url}
            age={value.age}
            name={value.name}
        />
        <InputField
            label='Country'
            value={value.city}
            onChange={
                (city: string) =>
                    onChange && onChange({...value, city})
            }
        />
        <Divider />
        {
            value.knowledge &&
            value.knowledge.map(
                KnowledgeView,
            )
        }

    </Layout>

