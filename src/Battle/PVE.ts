import Fighter, { SimpleFighter } from '../Fighter';
import Battle from './Battle';

class PVE extends Battle {
  constructor(
    private _play1: Fighter,
    private _robot: (Fighter | SimpleFighter)[],
  ) { super(_play1); }

  get robotsPlay(): (Fighter | SimpleFighter)[] {
    return this._robot;
  }

  fight(): number {
    if (this._play1.lifePoints > 0) {
      this.robotsPlay.forEach((robots) => {
        this._play1.attack(robots);
        robots.attack(this._play1);
      });
    }
    if (this._play1.lifePoints === -1) {
      return -1;
    } 
    return 1;
  }
}

export default PVE;
