import React from 'react'
import { storiesOf } from '@storybook/react'
import Counter from './Counter'
storiesOf('Test', module)
  .add('Counter', () => <Counter  value={10}/>)
