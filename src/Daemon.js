import Math from './Math';

export default class Daemon extends Math {
  constructor(name, type = 'Daemon') {
    super(name, type);
    this.attack = 100;
    this.defence = 40;
  }
}
