import React from "react"
import Transition from "react-transition-group/Transition"

import { defaultStyle, transitionStyles } from "../transitions"

const Message = (props) => (
  <Transition in appear={true} timeout={500}>
    {(state) => (
    <div
      style={{
      maxWidth: "30em",
      padding: "0 1em",
      ...defaultStyle,
      ...transitionStyles[state]
      }}
    >
      <p
        style={{
        fontFamily: props.messageFont,
        color: props.color,
        fontSize: "1em",
        textAlign: "center",
        fontWeight: "normal",
        fontStyle: "italic",
        }}
      >{props.message}</p>
    </div>
    )}
  </Transition>
  )

export default Message
