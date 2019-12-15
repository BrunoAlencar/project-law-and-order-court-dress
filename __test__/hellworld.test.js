import React from 'react'
import renderer from 'react-test-renderer'
import HelloWorld from '../src/pages/HelloWorld'


describe('Hello world component', () => {

    it('Shoud render Hello world', () => {
        renderer.create(<HelloWorld />)
    })
})