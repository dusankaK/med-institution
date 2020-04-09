export class Pregled {
  constructor(tip) {
    if(tip === 'secer u krvi') {
      this.vrednost = Math.floor(Math.random() * (200 - 100) + 100);
      this.vremePoslednjegObroka = '14:00h'
    } else if (tip === 'pritisak') {
      this.gornji = Math.floor(Math.random() * (200 - 100) + 100);
      this.donji = Math.floor(Math.random() * (100 - 50) + 50);
      this.puls = Math.floor(Math.random() * (80 - 50) + 50);
    } else if (tip === 'holesterol u krvi') {
      this.vrednost = Math.floor(Math.random() * (200 - 100) + 100);
      this.vremePoslednjegObroka = '12:00h'
    }
  }	  
}
  
