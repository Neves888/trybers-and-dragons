import Race from './Race';

class Dwarf extends Race {
  private _pointsLife = 80;
  static counter = 0;

  constructor(_name: string, _dexterity: number) {
    super(_name, _dexterity);
    Dwarf.counter += 1;
  }

  static createdRacesInstances(): number {
    return Dwarf.counter;
  }

  get maxLifePoints(): number {
    return this._pointsLife;
  }
}

export default Dwarf;