import {Component} from '@angular/core';
import {AreaComponent} from '@marciniak/map/lib/area.component';
import {System} from '../systems/system';
import {SelectableSystem, SelectionError, SystemsSelection} from './systems-selection';

@Component({
  selector: 'app-system-selector',
  templateUrl: './system-selector.component.html',
  styleUrls: ['./system-selector.component.scss']
})

export class SystemSelectorComponent {

  messageBoxMessage = '';
  errorMessage = false;

  constructor(private systemsSelection: SystemsSelection) {
  }

  availableSystems(): SelectableSystem[] {
    return this.systemsSelection.available;
  }

  inactiveSystems(): System[] {
    return this.systemsSelection.inactive;
  }

  selectSystem(event: MouseEvent) {
    event.preventDefault();
    const area = event.target as unknown as AreaComponent;
    if (area) {
      const err = this.systemsSelection.toggleSystem(area.title);
      if (err === SelectionError.CANNOT_FIND_SYSTEM) {
        this.messageBoxMessage = 'Cannot find chosen system';
        this.errorMessage = true;
      } else if (err === SelectionError.MAX_SELECTED_AMOUNT_REACHED) {
        this.messageBoxMessage = 'Maximum number of systems was selected';
        this.errorMessage = true;
      } else {
        this.messageBoxMessage = 'Choose systems';
        this.errorMessage = false;
      }
    }
  }

}