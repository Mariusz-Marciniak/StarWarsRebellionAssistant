import {Component} from '@angular/core';
import {AreaComponent} from '@marciniak/map/lib/area.component';
import {System} from '../systems/system';
import {SystemsSelection} from './systems-selection';

@Component({
  selector: 'app-system-selector',
  templateUrl: './system-selector.component.html',
  styleUrls: ['./system-selector.component.scss']
})

export class SystemSelectorComponent {

  constructor(private systemsSelection: SystemsSelection) {
  }

  availableSystems(): System[] {
    return this.systemsSelection.available;
  }

  inactiveSystems(): System[] {
    return this.systemsSelection.inactive;
  }

  selectSystem(event: MouseEvent) {
    event.preventDefault();
    const area = event.target as unknown as AreaComponent;
    if (area) {
      console.log(area);
    }
  }

}
