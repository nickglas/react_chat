export default class Contact{
  name: string
  img: string
  lastMessage: string
  lastMessageTime: string

  constructor(name: string, img: string, lastMessage: string, lastMessageTime: string){
    this.name = name
    this.img = img
    this.lastMessage = lastMessage
    this.lastMessageTime = lastMessageTime
  }
}

export default interface ContactTest{
  name: string
  img: string
  lastMessage: string
  lastMessageTime: string
}