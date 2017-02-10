import React from 'react'
import CodeControls from './features/codeControls/CodeControls'
import SourceInput from './features/editor/Editor'
import RenderedCode from './features/RenderedCode'
import './styles/App.css'

import "prismjs"
import "prismjs/components/prism-typescript"
import "prismjs/components/prism-bash"
import "prismjs/components/prism-jsx"
import "prismjs/themes/prism-tomorrow.css"



import 'normalize.css';
import './styles/index.css';



export default () => (
  <div className="padding1em">
    <CodeControls />
    <div className="flex">
      <SourceInput />
      <RenderedCode />
    </div>
  </div>
)

