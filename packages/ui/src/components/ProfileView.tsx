import * as React from 'react'
import {Profile} from '@local/client-store'
import {OnChangeCallback} from '../inputs/OnChangeCallback'
import styled from 'styled-components'
import UserHeader from './UserHeader'
import InputField from '../inputs/InputField'
import KnowledgeView from './KnowledgeView'

type ProfileViewProps = {
    profile: Profile
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

export default ({profile, onChange}: ProfileViewProps) =>
    <Layout>
        <UserHeader
            url={profile.url}
            age={profile.age}
            name={profile.name}
        />
        <InputField
            label='Country'
            value={profile.city}
            onChange={
                city =>
                    onChange && onChange({...profile, city})
            }
        />
        <Divider />
        {
            profile.knowledge &&
            profile.knowledge.map(
                KnowledgeView,
            )
        }

    </Layout>

