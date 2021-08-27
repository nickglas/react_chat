import { makeAutoObservable } from "mobx";
import Message from "../models/message";

export default class messageStore{

  pre_loaded_messages: Message[] = 
  [
    new Message(true,'This is a cool message','12:12'),
    new Message(false,'It sure is','13:12')
  ]

  constructor(){
    makeAutoObservable(this)
  }

  addMessage = (message: string) => {
    this.pre_loaded_messages.push(new Message(true, message, Date.now().toString()))
  }

}