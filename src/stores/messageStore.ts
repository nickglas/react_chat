import { makeAutoObservable } from "mobx";
import Message from "../models/message";

export default class messageStore{

  loaded_Messages: Message[] = []

  pre_loaded_messages: Message[] = 
  [
    new Message(true,'This is a cool message','12:12'),
    new Message(false,'It sure is','13:12')
  ]

  pre_loaded_messages_nick: Message[] = 
  [
    new Message(false,'how is your day','15:32'),
    new Message(true,'Yhea good','16:51')
  ]

  pre_loaded_messages_sjon: Message[] = 
  [
    new Message(true,'Do you have some free time?','8:55'),
    new Message(false,'Yhea sure','8:56')
  ]

  pre_loaded_messages_henk: Message[] = 
  [
    new Message(false,'you home right now?','12:12'),
    new Message(false,'hello?','13:12'),
    new Message(true,'yes, sorry i was doing something else?','13:12'),
  ]


  constructor(){
    makeAutoObservable(this)
  }

  addMessage = (message: string) => {
    this.pre_loaded_messages.push(new Message(true, message, Date.now().toString()))
  }

  setLoadedMessages = (messages: Message[]) => {
    this.loaded_Messages = messages
  }

}