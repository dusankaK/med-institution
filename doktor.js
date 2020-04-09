import {Osoba} from "./osoba.js"
import fs from "fs"
import moment from "moment"

// flags - a for append
var stream = fs.createWriteStream("log.txt", { flags: "a" })

export default class Doktor extends Osoba{
  constructor(ime, prezime, specijalnost){
    super(ime, prezime)
    this.specijalnost = specijalnost
    this.pacijenti = []
    stream.write(
      "[" + 
      moment().format("DD-MM-YYYY h:mm:ss") +
      "]" +
      `Doktor ${this.ime} je kreiran.` +
      `\n`)
  }

  zakaziPregled(pacijent, datum, vreme, tip) {
    let pregled = {'datum': datum, 'vreme': vreme, 'tip': tip}
    pacijent.pregledi.push(pregled)
    stream.write(
      "[" + 
      moment().format("DD-MM-YYYY h:mm:ss") +
      "]" + 
      `Pregled ${pregled.Tip} za pacijenta ${pacijent.ime} je zakazan.` + 
      `\n`
      )
  }
}