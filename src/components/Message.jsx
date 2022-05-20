import React from 'react'

const Message = ({children, type}) => {
  return (
      //This syntax is ised  to mix a static class with a dynamic one
    <div className={`alerta ${type}`}>{children}</div>
  )
}

export default Message