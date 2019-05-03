import {Injectable} from '@angular/core';
import {System} from '../systems/system';

@Injectable()
export class SystemsSelection {

  public available: System[];
  public inactive: System[];

  public constructor() {
  }

}
