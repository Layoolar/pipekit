import { hot } from 'react-hot-loader/root'
import React from 'react'
import { render } from 'react-dom'
import folderIcon from 'assets/folder-icon.svg'
import fileIcon from 'assets/file-icon.svg'

const App = () => (
  <div>
    <p>Replace me with application code</p>
    <p>Use the <img src={folderIcon} alt="folder icon" /> icon for HTML elements with children</p>
    <p>Use the <img src={fileIcon} alt="file icon" /> icon for HTML elements without children</p>
  </div>
)


const HotApp = hot(App)

const root = document.getElementById('root') as HTMLElement
render(<HotApp />, root)
