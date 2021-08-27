import { observer } from 'mobx-react-lite'
import React from 'react'
import { useStore } from '../../stores/store'
import './settingsTray.styles.css'

const Settingstray = () => {

  const {profileStore: {pre_loaded_profile}} = useStore()

  return (
    <div className="contact-settings">
      <div className="friend-drawer no-gutters friend-drawer--grey">
        <img className="profile-image" src={pre_loaded_profile?.img} alt="contact" />
        <div className="text-wrapper">
          <h6>{pre_loaded_profile?.name}</h6>
          <p>Offline</p>
        </div>
        <span className="float-right actions-profile-tray">
          <i className="material-icons tray-icons">cached</i>
          <i className="material-icons tray-icons">more_vert</i>
        </span>
      </div>
    </div>
  )
}

export default observer(Settingstray)
