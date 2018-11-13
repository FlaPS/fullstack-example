import React from 'react'
import { storiesOf } from '@storybook/react'
import styled from 'styled-components'
import * as fonts from './fonts'
import {map, keys, compose} from 'ramda'

const Wrapper = styled.div`
    background-color: #eee;
    max-width: 500px;
    margin: auto;
    padding: 10px 50px;
`

const renderExample = map((key: string) =>
    <div>
        {React.createElement(fonts[key], {}, key)}
    </div>)

const renderFonts = compose(renderExample, keys)
storiesOf('styles', module)
    .add('fonts', () =>
        <Wrapper>
            {renderFonts(fonts)}
        </Wrapper>,
    )
