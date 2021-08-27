import { makeAutoObservable } from "mobx";
import Contact from "../models/contact";

export default class profileStore{

  pre_loaded_profile = new Contact('Nick', 'https://randomuser.me/api/portraits/men/6.jpg','test','12:33')

  constructor(){
    makeAutoObservable(this)
  }

  

}