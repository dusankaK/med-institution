import Doktor from "./doktor.js";
import Pacijent from "./pacijent.js"
import SecerUkrvi from "./secerUkrvi.js";

var dragan = new Doktor('Dragan', 'Karac', 'internista');
var dusanka = new Pacijent('Dusanka', 'Karac', '1106993108258', '20154');
var jelena = new Pacijent('Jelena', 'Vidicevic', '1106993108258', '20154');
var secer = new SecerUkrvi('11.07.2020', '15:00');


dragan.dodajPacijenta(dusanka);
dragan.zakaziPregled(dusanka, secer);
jelena.izaberiDoktora(dragan);

//dusanka.obaviPregled('pritisak');

console.log(dragan, dusanka);
console.log(secer);