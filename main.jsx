import React from 'react'
import { createRoot } from 'react-dom'
import App from './src/App'
import Function from './src/Function'

const root = createRoot(document.getElementById('root'))
root.render(<App name={`Conco`} />)