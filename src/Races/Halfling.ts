import Race from './Race';

class Halfling extends Race {
  private pointsLife = 60;
  static counter = 0;

  constructor(_name: string, _dexterity: number) {
    super(_name, _dexterity);
    Halfling.counter += 1;
  }

  static createdRacesInstances(): number {
    return Halfling.counter;
  }

  get maxLifePoints(): number {
    return this.pointsLife;
  }
}

export default Halfling;