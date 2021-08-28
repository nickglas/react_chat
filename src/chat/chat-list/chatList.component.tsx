import { observer } from 'mobx-react-lite'
import React from 'react'
import { useStore } from '../../stores/store'
import Chatitem from '../chat-item/chatItem.component'
import './chatList.styles.css'

const Chatlist = () => {

  const {messageStore: {loaded_Messages}} = useStore()

  return (
    <div className="chat-panel">
      {loaded_Messages.map((message) => (
        <Chatitem message={message} />
      ))}
    </div>
  )
}

export default observer(Chatlist)
