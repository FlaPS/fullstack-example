import {storiesOf} from '@storybook/react'
import {compose, reduce, sort, toPairs} from 'ramda'
import SVGLibrary from './SVGLibrary'

compose(
    reduce(
        (story, [iconName, icon]) =>
            story.add(iconName, icon),
        storiesOf('styles/SVGLibrary', module),
    ),
    sort(([nameA], [nameB]) => nameA > nameB ? 1 : -1),
)(toPairs(SVGLibrary))
