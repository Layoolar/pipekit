import { hot } from 'react-hot-loader/root'
import React from 'react'
import { render } from 'react-dom'
import Home from './pages/Home/Index';

const App = () => (
    <Home />
)

const HotApp = hot(App)

const root = document.getElementById('root') as HTMLElement
render(<HotApp />, root)
