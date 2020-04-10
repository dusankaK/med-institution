import { Pregled } from "./pregled.js"
import {Log} from "./log.js"

export default class SecerUkrvi extends Pregled {
  constructor(datum, vreme) {
    super(datum, vreme)
    this.vrednost = Math.floor(Math.random() * (200 - 100) + 100);
    this.vremePoslednjeObroka = "14:00h";
  }

  obaviPregled() {
    Log.logujAkciju(`Pregled šećera u krvi je obavljen. Vrednosti su ${this.vrednost}, a vreme poslednjeg obroka je ${this.vremePoslednjeObroka}.`)
  }
}