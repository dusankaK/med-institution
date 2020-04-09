import {Osoba} from "./osoba.js"
import {Pregled} from "./pregled.js"
import fs from "fs";
import moment from "moment";

var stream = fs.createWriteStream("log.txt", { flags: "a" });

export default class Pacijent extends Osoba {
  constructor(ime, prezime, jmbg, brojZk){
    super(ime, prezime)
    this.jmbg = jmbg
    this.brojZk = brojZk
    this.doktor = null
    this.pregledi = []
    stream.write(
      "[" +
        moment().format("DD-MM-YYYY h:mm:ss") +
        "]" +
        `Pacijent ${this.ime} je kreiran.` +
        `\n`
    );
  }

  izaberiDoktora(doktor){
    if(this.doktor){
      stream.write(
        "[" +
          moment().format("DD-MM-YYYY h:mm:ss") +
          "]" +
          `${this.ime} žao nam je, ali možete imati samo jednog izabranog lekara.` +
          `\n`
      );
      return;
    } else {
      this.doktor = doktor;
      doktor.pacijenti.push(this);
      stream.write(
        "[" +
          moment().format("DD-MM-YYYY h:mm:ss") +
          "]" +
          `Pacijent ${this.ime} je odabrao/la doktora ${this.doktor.ime}.` +
          `\n`
      );
    }  
  }

  obaviPregled(tip){
    var pregled = this.pregledi.find(preg => preg.tip === tip)
    if(!pregled) {
      stream.write(
        "[" +
          moment().format("DD-MM-YYYY h:mm:ss") +
          "]" +
          "Nema takvog pregleda." +
          `\n`
      );
      return;
    }

    if(tip === 'secer u krvi') {
      var secer = new Pregled('secer u krvi')
      stream.write(
        "[" +
          moment().format("DD-MM-YYYY h:mm:ss") +
          "]" +
          `Pregled šećera u krvi za pacijenta ${this.ime} je obavljen ${pregled.datum} u ${pregled.vreme}.Vrednost šećera u krvi: ${secer.vrednost}` +
          `\n`
      );
      this.pregledi.splice(this.pregledi.indexOf(pregled),1);
    }
    if(tip === 'pritisak') {
      var pritisak = new Pregled('pritisak')
      stream.write(
        "[" +
          moment().format("DD-MM-YYYY h:mm:ss") +
          "]" +
          `Pregled pritiska za pacijenta ${this.ime} je obavljen ${pregled.datum} u ${pregled.vreme}. Gornja vrednost pritiska: ${pritisak.gornji}, donja vrednost: ${pritisak.donji}, puls: ${pritisak.puls}.` +
          `\n`
      );
      this.pregledi.splice(this.pregledi.indexOf(pregled),1);
    }
    if(tip === 'secer u holesterol') {
      var secer = new Pregled('holesterol u krvi')
      stream.write(
        "[" +
          moment().format("DD-MM-YYYY h:mm:ss") +
          "]" +
          `Pregled holesterola u krvi za pacijenta ${this.ime} je obavljen ${pregled.datum} u ${pregled.vreme}. Vrednost holesterola u krvi je: ${holesterol.vrednost}` +
          `\n`
      );
      this.pregledi.splice(this.pregledi.indexOf(pregled),1);
    }

  }

  
}