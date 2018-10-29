import React from 'react'
import CodeControls from './features/codeControls/CodeControls'
import SourceInput from './features/sourceInput/SourceInput'
import RenderedCode from './features/RenderedCode'
import './styles/App.css'
import SmartTerminal from 'smart-terminal'

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

//ok so this isn't very "React'y" but I don't have any issue adding vanilla comps to it
var smartTerminal = new SmartTerminal(null, null)
smartTerminal.show()

document.body.addEventListener(SmartTerminal.EVENTS.APPEND_MESSAGE, function (event) {
  smartTerminal.appendMessage(event.detail)
})
