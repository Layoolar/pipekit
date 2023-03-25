import { hot } from 'react-hot-loader/root'
import React from 'react'
import { render } from 'react-dom'
import folderIcon from 'assets/folder-icon.svg'
import fileIcon from 'assets/file-icon.svg'
import Image from 'components/shared/Image'
import Home from './pages/Home';

const App = () => (
  <div>
    <p>Replace me with application code</p>
    <p><Image icon={folderIcon} alt="folderIcon" /></p>
    <p><Image icon={fileIcon} alt="file icon" /></p>
    <Home />
  </div>
)

const HotApp = hot(App)

const root = document.getElementById('root') as HTMLElement
render(<HotApp />, root)
