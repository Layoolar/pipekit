import { hot } from 'react-hot-loader/root'
import React from 'react'
import { render } from 'react-dom'
import folderIcon from 'assets/folder-icon.svg'
import fileIcon from 'assets/file-icon.svg'
import Image from 'components/shared/Image'
import Home from './pages/Home';

const App = () => (
    <Home />
)

const HotApp = hot(App)

const root = document.getElementById('root') as HTMLElement
render(<HotApp />, root)
