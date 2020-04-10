import {Osoba} from "./osoba.js"
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
      console.log(`${this.ime} žao nam je, ali možete imati samo jednog izabranog lekara.`)
      return;
    } else {
      this.doktor = doktor;
      doktor.pacijenti.push(this);
      Log.logujAkciju(`Pacijent ${this.ime} je odabrao/la doktora ${this.doktor.ime}.`)
    }  
  }

  obaviPregled(){
    if(!this.pregledi.length) {
      console.log('Nemate zakazanih pregleda');
      return;
    }
    //hard code-ovano
    this.pregledi[0].obaviPregled();
    this.pregledi.splice(this.pregledi[0], 1);
  }
  
}