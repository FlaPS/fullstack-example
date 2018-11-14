import * as React from 'react'
import Paper from '../layout/Paper'
import {Regular} from '../styles/fonts'
import {User} from '@local/client-store'
import styled from 'styled-components'
import UserHeader from './UserHeader'
import {ExtractProps} from '@sha/react-fp'


type CardProps = ExtractProps<typeof CardLayout>

export type UserCardProps = User & CardProps


const CardLayout = styled(Paper)`
  width: 220px;
  height: 292px;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 40px;
  box-sizing: border-box;
  > *:first-child{
    margin-bottom: 10px;
  }
  > *:not(:first-child){
    margin-top: 10px;
  }
  &:hover{
      box-shadow: 1px 4px 6px rgba(0, 0, 0, 0.3);
  }


  > *:last-child{
    flex-shrink: 0;
    max-height: 46px;
    text-overflow: ellipsis;
    overflow: hidden;

    position: relative;
    &:after{
        content: " ";
        position: absolute;
        bottom: 0;
        left: 0;
        width: 100%;
        text-align: center;
        margin: 0;
        padding: 8px 0;
        background-image: linear-gradient(to bottom,transparent,white);
    }
  }
`

const Languages = styled(Regular)`
  padding-left: 36px;
  padding-right: 36px;
  text-align: center;

`
const UserCard = ({url, age, name, languages = [], ref, ...rest}: UserCardProps) =>
    <CardLayout {...rest}>
        <UserHeader url={url} age={age} name={name}/>
        {
            languages.length &&
            <Languages>
                    {languages.join(', ')}
            </Languages>
        }
    </CardLayout>

export default UserCard
