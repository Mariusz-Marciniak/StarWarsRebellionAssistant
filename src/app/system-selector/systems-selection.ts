import {Injectable} from '@angular/core';
import {System} from '../systems/system';

@Injectable()
export class SystemsSelection {

  public available: SelectableSystem[];
  public inactive: System[];

  public constructor() {
  }

  static convertToSelectableSystems(systems: System[]): SelectableSystem[] {
    return systems.map(s => new SelectableSystem(s));
  }

}

export class SelectableSystem extends System {
  public selected = false;

  constructor(private system: System) {
    super(system.name, system.region, system.left, system.top, system.basePoints, system.coords);
  }

}
