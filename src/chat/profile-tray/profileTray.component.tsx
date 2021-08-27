import { observer } from 'mobx-react-lite'
import React from 'react'
import { useStore } from '../../stores/store'
import './profileTray.styles.css'

const Profiletray = () => {

  const {contactStore: {selectedContact}} = useStore()

  return (
    <div className="contact-settings">
      <div className="friend-drawer no-gutters friend-drawer--grey">
        <img className="profile-image" src={selectedContact?.img} alt="contact" />
        <div className="text-wrapper">
          <h6>{selectedContact?.name}</h6>
          <p>Offline</p>
        </div>
        <span className="float-right profile-tray-icons">
          <i className="material-icons tray-icons">cached</i>
          <i className="material-icons tray-icons">more_vert</i>
        </span>
      </div>
    </div>
  )
}

export default observer(Profiletray)