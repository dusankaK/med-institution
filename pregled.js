export class Pregled {
  constructor(datum, vreme){
    if(this.constructor.name === 'Pregled'){
      throw new Error ('You cannot call this function');
    }
    this.datum = datum;
    this.vreme = vreme;
  }

  obaviPregled() {
    throw new Error ('You cannot call this function from parent class')
  }

}


