import { useStore } from '../../stores/store'
import Contactitem from '../contact-item/contactItem.component'
import Nocontacts from '../no-contacts/noContacts.component'
import './contactList.styles.css'
import { observer } from 'mobx-react-lite'

const Contactlist = () => {

  const {contactStore: {filteredContacts} } = useStore()

  return (
    <div className="contacts-wrapper">

        {filteredContacts.length > 0 ? 
          filteredContacts.map((item) => (
            <Contactitem key={item.img} contact={item}/>
          ))
        :
          <Nocontacts />
        }
    </div>
  )
}

export default observer(Contactlist)
