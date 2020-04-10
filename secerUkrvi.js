import {Pregled} from "./pregled.js"


export default class SecerUkrvi extends Pregled {
  constructor(datum, vreme){
    super(datum, vreme)
    this.vrednost = Math.floor(Math.random() * (200 - 100) + 100);
    this.vremePoslednjeObroka = "14:00h";
    console.log(`Pregled šećer u krvi je obavljen za pacijenta ${pacijent.ime}`)
  }


}