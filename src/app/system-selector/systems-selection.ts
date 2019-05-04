import {Injectable} from '@angular/core';
import {System} from '../systems/system';

@Injectable()
export class SystemsSelection {

  public available: SelectableSystem[];
  public inactive: System[];

  /**
   * defines maximum amount of available system which can be marked as selected
   * -1 - unlimited
   * 0 - none
   * 1 - single one
   * >1 - defined amount
   */
  public maxSelected = -1;

  private selectedSystemsAmount = 0;


  public constructor() {
  }

  static convertToSelectableSystems(systems: System[]): SelectableSystem[] {
    return systems.map(s => new SelectableSystem(s));
  }

  /**
   *
   * @param systemName - toggled system name
   * @return error - error value
   */
  toggleSystem(systemName: string): SelectionError {
    const chosenSystem = this.available.find(s => s.name === systemName);

    if (chosenSystem) {
      if (chosenSystem.selected) {
        return this.deselect(chosenSystem);
      } else {
        return this.select(chosenSystem);
      }
    } else {
      return SelectionError.CANNOT_FIND_SYSTEM;
    }
  }

  private deselect(system: SelectableSystem): SelectionError {
    system.selected = false;
    this.selectedSystemsAmount--;
    return SelectionError.NO_ERROR;
  }

  private select(system: SelectableSystem): SelectionError {
    if (this.unlimitedSelection() || this.selectedSystemsAmount < this.maxSelected) {
      system.selected = true;
      this.selectedSystemsAmount++;
      return SelectionError.NO_ERROR;
    } else {
      return SelectionError.MAX_SELECTED_AMOUNT_REACHED;
    }
  }

  unlimitedSelection(): boolean {
    return this.maxSelected === -1;
  }

  singleSelection(): boolean {
    return this.maxSelected === 1;
  }
}

export class SelectableSystem extends System {
  public selected = false;

  constructor(private system: System) {
    super(system.name, system.region, system.left, system.top, system.basePoints, system.coords);
  }

}

export enum SelectionError {
  NO_ERROR, MAX_SELECTED_AMOUNT_REACHED, CANNOT_FIND_SYSTEM
}
