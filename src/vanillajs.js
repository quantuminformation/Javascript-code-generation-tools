import SmartTerminal from 'smart-terminal'


//ok so this isn't very "React'y" but I don't have any issue adding vanilla comps to it

var smartTerminal = new SmartTerminal(null, null)
smartTerminal.show()

document.body.addEventListener(SmartTerminal.EVENTS.APPEND_MESSAGE, function (event) {
  smartTerminal.appendMessage(event.detail)
})
