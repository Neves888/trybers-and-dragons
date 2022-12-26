import Fighter from '../Fighter';
import Battle from './Battle';

class PVP extends Battle {
  constructor(
    private _play1: Fighter, 
    private _play2: Fighter,
  ) { super(_play1); super.fight(); }

  fight(): number {
    if (this._play1.lifePoints > 0 && this._play2.lifePoints > 0) {
      this._play1.attack(this._play2);
      this._play2.attack(this._play1);
    }
    if (this._play1.lifePoints === -1) {
      return -1;
    } 
    return 1;
  }
}

export default PVP;