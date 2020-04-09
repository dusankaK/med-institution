import {Osoba} from "./osoba.js"
import {Pregled} from "./pregled.js"

export default class Pacijent extends Osoba {
  constructor(ime, prezime, jmbg, brojZk){
    super(ime, prezime)
    this.jmbg = jmbg
    this.brojZk = brojZk
    this.doktor = null
    this.pregledi = []
    console.log(`Pacijent ${this.ime} je kreiran!`)
  }

  izaberiDoktora(doktor){
    if(this.doktor){
      console.log(`${this.ime} žao nam je, ali možete imati samo jednog izabranog lekara.` )
      return
    } else {
      this.doktor = doktor;
      doktor.pacijenti.push(this)
      console.log(`Pacijent ${this.ime} je odabrao/la doktora ${this.doktor.ime}.`)
    }  
  }

  obaviPregled(tip){
    var pregled = this.pregledi.find(preg => preg.Tip === tip)
    if(!pregled) {
      console.log('Nema takvog pregleda');
      return;
    }

    if(tip === 'secer u krvi') {
      var secer = new Pregled('secer u krvi')
      console.log(`Pregled šećera u krvi za pacijenta ${this.ime} je obavljen ${pregled.Datum} u ${pregled.Vreme}.`)
      console.log(`Vrednost šećera u krvi: ${secer.vrednost}`)

      this.pregledi.splice(this.pregledi.indexOf(pregled),1);
    }
    if(tip === 'pritisak') {
      var pritisak = new Pregled('pritisak')
      console.log(`Pregled pritiska za pacijenta ${this.ime} je obavljen ${pregled.Datum} u ${pregled.Vreme}.`)
      console.log(`Gornja vrednost pritiska: ${pritisak.gornji}, donja vrednost: ${pritisak.donji}, puls: ${pritisak.puls}.`)

      this.pregledi.splice(this.pregledi.indexOf(pregled),1);
    }
    if(tip === 'secer u holesterol') {
      var secer = new Pregled('holesterol u krvi')
      console.log(`Pregled holesterola u krvi za pacijenta ${this.ime} je obavljen ${pregled.Datum} u ${pregled.Vreme}.`)
      console.log(`Vrednost holesterola u krvi je: ${holesterol.vrednost}`)
      this.pregledi.splice(this.pregledi.indexOf(pregled),1);
    }

  }

  
}