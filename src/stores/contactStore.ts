import { makeAutoObservable } from "mobx";
import Contact from "../models/contact";
import messageStore from "./messageStore";
import { useStore } from "./store";

export default class contactStore{


  pre_loaded_contacts: Contact[] = [
    new Contact('Nick Glas','https://randomuser.me/api/portraits/men/67.jpg','hey man!','23:04'),
    new Contact('Sjon Don','https://randomuser.me/api/portraits/men/68.jpg','hey man!','11:34'),
    new Contact('Henk pieters','https://randomuser.me/api/portraits/men/69.jpg','hey man!','12:55'),
  ]

  filteredContacts: Contact[] = []

  selectedContact: Contact | null = null

  constructor(){
    makeAutoObservable(this)
    this.filteredContacts = this.pre_loaded_contacts
    this.selectedContact = this.pre_loaded_contacts[0]
    
  }

  filterContacts = (e: React.ChangeEvent<HTMLInputElement>) => {
    if(e.target.value === null || e.target.value === ''){
      this.filteredContacts = this.pre_loaded_contacts
    }
    this.filteredContacts = this.pre_loaded_contacts.filter(c => c.name.toLowerCase().includes(e.target.value))
  }

  addContact = (contact: Contact) => {
    this.pre_loaded_contacts.push(contact)
  }

  setSelectedContact = (contact: Contact) => {
    this.selectedContact = contact
  }

}