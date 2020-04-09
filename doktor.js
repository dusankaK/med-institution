import {Osoba} from "./osoba.js"

export default class Doktor extends Osoba{
  constructor(ime, prezime, specijalnost){
    super(ime, prezime)
    this.specijalnost = specijalnost
    this.pacijenti = []
    console.log(`Doktor ${this.ime} je kreiran!`);
  }

  zakaziPregled(pacijent, datum, vreme, tip) {
    let pregled = {'Datum': datum, 'Vreme': vreme, 'Tip': tip}
    pacijent.pregledi.push(pregled)
    console.log(`Pregled ${pregled.Tip} za pacijenta ${pacijent.ime} je zakazan`)
  }

}