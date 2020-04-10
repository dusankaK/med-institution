import {Pregled} from "./pregled.js"
import {Log} from "./log.js"

export default class Pritisak extends Pregled {
  constructor(datum, vreme){
    super(datum, vreme)
    this.gornji = Math.floor(Math.random() * (200 - 100) + 100);
    this.donji = Math.floor(Math.random() * (100 - 50) + 50);
    this.puls = Math.floor(Math.random() * (80 - 50) + 50);
  }

  obaviPregled() {
    Log.logujAkciju(`Pregled pritisak je obavljen i vrednosti su za gornji: ${this.gornji}, za donji: ${this.donji}, a puls ${this.puls}.`)
  }
}