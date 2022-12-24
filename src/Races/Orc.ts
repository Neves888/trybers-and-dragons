import Race from './Race';

class Orc extends Race {
  private pointsLife = 74;
  static counter = 0;

  constructor(_name: string, _dexterity: number) {
    super(_name, _dexterity);
    Orc.counter += 1;
  }

  static createdRacesInstances(): number {
    return Orc.counter;
  }

  get maxLifePoints(): number {
    return this.pointsLife;
  }
}

export default Orc;