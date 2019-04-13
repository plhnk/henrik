const defaultStyle = {
  transition: `opacity 400ms ease-in-out, transform 400ms cubic-bezier(0.6,-0.3, 0.4, 1.4)`,
  transform: `translateY(10vh)`,
  opacity: 0
};

const transitionStyles = {
  entered: { 
    opacity: 1,
    transform: `translateY(0)`,
   },
}

export { defaultStyle, transitionStyles }
