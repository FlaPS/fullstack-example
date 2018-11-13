import styled from 'styled-components'
import {prop} from 'ramda'

export default styled<Partial<{url: string}>, 'div'>('div')`
    min-width: 100px;
    min-height: 100px;
    border: 1px solid #E1E1E1;
    border-radius: 50px;
    background-size: cover;
    background-image: url(${prop('url')});
`
