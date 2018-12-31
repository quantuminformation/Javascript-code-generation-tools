import  React from 'react'

export const RenderedCode = (props) => {

  function rawMarkup() {
    return {__html: props.outputCodeFromJSON};
  }

  return (
    <section className="flex1">
      <h2>Output code</h2>
      <p id="renderedCode" dangerouslySetInnerHTML={rawMarkup()}></p>
    </section>
  )
}
