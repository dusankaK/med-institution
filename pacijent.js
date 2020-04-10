import {Osoba} from "./osoba.js"
import {Pregled} from "./pregled.js"
import {Log} from "./log.js"

export default class Pacijent extends Osoba {
  constructor(ime, prezime, jmbg, brojZk){
    super(ime, prezime)
    this.jmbg = jmbg
    this.brojZk = brojZk
    this.doktor = null
    this.pregledi = []
    Log.logujAkciju(`Pacijent ${this.ime} je kreiran.`)
  }

  izaberiDoktora(doktor){
    if(this.doktor){
      Log.logujAkciju(`${this.ime} žao nam je, ali možete imati samo jednog izabranog lekara.`)
      return;
    } else {
      this.doktor = doktor;
      doktor.pacijenti.push(this);
      Log.logujAkciju(`Pacijent ${this.ime} je odabrao/la doktora ${this.doktor.ime}.`)
    }  
  }

  
}