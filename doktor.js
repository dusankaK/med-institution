import {Osoba} from "./osoba.js"
import {Log} from "./log.js"


export default class Doktor extends Osoba{
  constructor(ime, prezime, specijalnost){
    super(ime, prezime)
    this.specijalnost = specijalnost
    this.pacijenti = []
    Log.logujAkciju(`Doktor ${this.ime} je kreiran.`)
  }

  dodajPacijenta(pacijent){
    this.pacijenti.push(pacijent);
    pacijent.doktor = this.ime
    Log.logujAkciju(`Doktor ${this.ime} je dodao pacijenta ${pacijent.ime}.`);
  }

  zakaziPregled(pacijent, pregled) {
    pacijent.pregledi.push(pregled)
  }
}