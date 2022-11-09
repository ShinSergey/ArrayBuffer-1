import Character from './Character';

export default class Math extends Character {
  constructor() {
    super();
    this.mathStoned = '';
    this.mathAttack = '';
  }

  set stoned(distance) {
    this.mathStoned = Math.log2(distance);
  }

  get stoned() {
    return this.mathAttack - this.mathStoned * 5;
  }

  set attack(distance) {
    this.mathAttack = 100 - (distance - 1) * 10;
  }

  get attack() {
    return this.mathAttack;
  }
}
