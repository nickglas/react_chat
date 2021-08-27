import React from 'react'
import { useStore } from '../../stores/store'
import './chatInput.styles.css'


const Chatinput = () => {

  const {messageStore: {addMessage}} = useStore()

  let typedMessage: string = ''

  function handleSubmit(){
    console.warn(typedMessage)
    if(typedMessage && !/^\s+$/.test(typedMessage)){
      addMessage(typedMessage)
    }
  }

  function handleChange(e: React.ChangeEvent<HTMLInputElement>){
    typedMessage = e.target.value
  }

  return (
    <div className="chat-input">
           <div className="col chat-input-col">
             <div className="chat-box-tray">
               <i className="material-icons icon-actions">sentiment_very_satisfied</i>
                <input placeholder="Type message here..." type="text" onChange={(e) => handleChange(e)} />
                <i className="material-icons icon-actions">mic</i>
                <i className="material-icons icon-actions" onClick={handleSubmit}>send</i>
              </div>
           </div>
        </div>
  )
}

export default Chatinput
