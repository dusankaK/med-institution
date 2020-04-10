import {Pregled} from "./pregled.js"

export default class Pritisak extends Pregled {
  constructor(datum, vreme){
    super(datum, vreme)
    this.gornji = Math.floor(Math.random() * (200 - 100) + 100);
    this.donji = Math.floor(Math.random() * (100 - 50) + 50);
    this.puls = Math.floor(Math.random() * (80 - 50) + 50);
  }
}