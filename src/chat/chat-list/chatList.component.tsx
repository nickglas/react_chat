import { observer } from 'mobx-react-lite'
import React from 'react'
import { useStore } from '../../stores/store'
import Chatitem from '../chat-item/chatItem.component'
import './chatList.styles.css'

const Chatlist = () => {

  const {messageStore: {pre_loaded_messages}} = useStore()

  return (
    <div className="chat-panel">
      {pre_loaded_messages.map((message) => (
        <Chatitem message={message} />
      ))}
    </div>
  )
}

export default observer(Chatlist)
