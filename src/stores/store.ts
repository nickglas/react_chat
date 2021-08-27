import { createContext, useContext } from "react"
import contactStore from "./contactStore";
import messageStore from "./messageStore";
import profileStore from "./profileStore";

interface Store{
  contactStore: contactStore
  messageStore: messageStore
  profileStore: profileStore
}

export const store: Store = {
  contactStore: new contactStore(),
  messageStore: new messageStore(),
  profileStore: new profileStore()
}

export const StoreContext = createContext(store)

export function useStore(){
  return useContext(StoreContext);
}