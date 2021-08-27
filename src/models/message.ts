export default class Message{
  sender: boolean
  message: string
  time: string

  constructor(sender: boolean, message: string, time: string){
    this.sender = sender
    this.message = message
    this.time = time
  }

}