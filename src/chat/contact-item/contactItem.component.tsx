import { observer } from 'mobx-react-lite'
import React from 'react'
import Contact from '../../models/contact'
import { useStore } from '../../stores/store'
import './contactItem.styles.css'

interface Props {
  contact : Contact
}



const Contactitem = ({contact} : Props) => {

  const {contactStore: {setSelectedContact, selectedContact}, messageStore: {setLoadedMessages, pre_loaded_messages_nick, pre_loaded_messages_henk, pre_loaded_messages_sjon}} = useStore()

  function handleOnclick(contact: Contact){
    setSelectedContact(contact)
    if(contact.name.toLowerCase() === 'nick glas'){
      setLoadedMessages(pre_loaded_messages_nick)
    }
    if(contact.name.toLowerCase() === 'sjon don'){
      setLoadedMessages(pre_loaded_messages_sjon)
    }
    if(contact.name.toLowerCase() === 'henk pieters'){
      setLoadedMessages(pre_loaded_messages_henk)
    }
  }

  return (
    <div className={ selectedContact?.img === contact.img ? "friend-drawer friend-drawer--onhover friend-drawer-selected" : "friend-drawer friend-drawer--onhover"} onClick={() => handleOnclick(contact)}>
      <img className="profile-image" src={contact.img} alt="contact" />
      <div className="text-wrapper">
        <h6>{contact.name}</h6>
        <p>{contact.lastMessage}</p>
      </div>
      <span className="time text-muted small">
        {contact.lastMessageTime}
      </span>
    </div>
  )
}

export default observer(Contactitem)
