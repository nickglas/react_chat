import React from 'react'
import Message from '../../models/message'
import './chatItem.styles.css'

interface Props{
  message: Message
}

const Chatitem = ({message}: Props) => {
  return (
    <div>
      {message.sender === false ?
        <div className="row no-gutters">
          <div className="col-md-8">
            <div className="chat-bubble chat-bubble--left">
              {message.message}
            </div>
          </div>
        </div>
        :
        <div className="row no-gutters">
          <div className="col-md-8 offset-md-4">
            <div className="chat-bubble chat-bubble--right">
            {message.message}
            </div>
          </div>
        </div>}
    </div>
  )
}

export default Chatitem
