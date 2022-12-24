import Race from './Race';

class Elf extends Race {
  private pointsLife = 99;
  static counter = 0;

  constructor(_name: string, _dexterity: number) {
    super(_name, _dexterity);
    Elf.counter += 1;
  }

  static createdRacesInstances(): number {
    return Elf.counter;
  }

  get maxLifePoints(): number {
    return this.pointsLife;
  }
}

export default Elf;