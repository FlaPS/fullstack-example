import styled from 'styled-components'
import Avatar from './Avatar'
import {Caption, Title} from '../styles/fonts'
import * as React from 'react'

const Layout =  styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  > *:first-child{
    margin-bottom: 10px;
  }
  > *:not(:first-child){
    margin-top: 10px;
  }
`

export default ({name, age, url}: any) =>
    <Layout>
        <Avatar url={url!} />
        <Title>{name}</Title>
        {age && <Caption>{age} years old</Caption>}
    </Layout>
