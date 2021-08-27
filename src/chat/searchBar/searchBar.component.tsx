import { observer } from 'mobx-react-lite'
import { useStore } from '../../stores/store'
import './searchBar.styles.css'
const Searchbar = () => {

  const {contactStore: {filterContacts}} = useStore()
  
  return (
    <div className="search-box">
      <div className="input-wrapper">
        <i className="material-icons">search</i>
        <input className="input-contacts" placeholder="Search contacts" onChange={ (e) => filterContacts(e)} />
      </div>
    </div>
  )
}

export default observer(Searchbar)
