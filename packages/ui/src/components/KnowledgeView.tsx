import * as React from 'react'
import styled from 'styled-components'
import {Knowledge} from '@local/client-store'
import {Regular, Title} from '../styles/fonts'

const Layout = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
`

const LanguagesList = styled(Regular)`
    maw-width: 500px;
    margin-top: 10px;

`

const FRAMEWORK_DELIMITER = ' - '

export default ({language, frameworks = []}: Knowledge) =>
    <Layout>
        <Title>{language}</Title>
        {
            frameworks.length &&
            <LanguagesList>
                {frameworks.join(FRAMEWORK_DELIMITER)}
            </LanguagesList>
        }
    </Layout>
