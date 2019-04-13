import React from "react"
import Transition from "react-transition-group/Transition"

import { defaultStyle, transitionStyles } from "../transitions"

const Title = (props) => (
  <Transition in appear={true} timeout={400}>
    {(state) => (
    <div
      style={{
      padding: "1em",
      ...defaultStyle,
      ...transitionStyles[state],
      }}
    >
      <h1
        style={{
        fontFamily: "Work Sans, sansSerif",
        color: props.color,
        fontSize: "3em",
        fontWeight: "900",
        margin: "0",
        textAlign: "center",
        fontVariantNumeric: "tabular-nums",
        }}
      >{ props.title }</h1>
    </div>
    )}
  </Transition>
)

export default Title
