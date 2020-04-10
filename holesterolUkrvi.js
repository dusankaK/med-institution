import {Pregled} from "./pregled.js"

export default class HolesterolUKrvi extends Pregled {
  constructor(datum, vreme){
    super(datum, vreme)
    this.vrednost = Math.floor(Math.random() * (200 - 100) + 100);
    this.vremePoslednjeObroka = "11:00h";
  }
}