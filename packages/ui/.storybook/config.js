
import { configure } from '@storybook/react'
const req = require.context("../src", true, /.story.tsx$/);

configure(() => {
    // require('../src/index.story')
    req.keys()
        .sort()
        .forEach(filename => {
            if(!filename.includes('src/index.story'))
                req(filename)
        });
}, module);
