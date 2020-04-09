import Doktor from "./doktor.js";
import Pacijent from "./pacijent.js"

let dragan = new Doktor('Dragan', 'Karac', 'internista');
let dejan = new Doktor('Dejan', 'Karagic', 'internista');
let dusanka = new Pacijent('Dusanka', 'Karac', '1106993108258', '20154');
dragan.zakaziPregled(dusanka, "11.06.2019", "15:00", "secer u krvi");
dragan.zakaziPregled(dusanka, "11.07.2020", "18:00", "pritisak");
dragan.zakaziPregled(dusanka, "12.07.2020", "17:00", "holesterol u krvi");

dusanka.izaberiDoktora(dragan);
dusanka.izaberiDoktora(dejan);
dusanka.obaviPregled('pritisak');

//console.log(dragan, dusanka);