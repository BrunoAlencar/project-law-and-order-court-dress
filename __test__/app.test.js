import React from 'react'
import App from '../src/App'
import renderer from 'react-test-renderer'

describe('App component', () => {

    it('Shoud render app', () => {
        renderer.create(<App />)
    })
})