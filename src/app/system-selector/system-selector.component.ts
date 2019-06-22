import {Component} from '@angular/core';
import {AreaComponent} from '@marciniak/map/lib/area.component';
import {System} from '../systems/system';
import {SelectableSystem, SelectionError, SystemsSelection} from './systems-selection';
import {Router} from '@angular/router';
import {SystemSelectorService} from './system-selector.service';

@Component({
  selector: 'app-system-selector',
  templateUrl: './system-selector.component.html',
  styleUrls: ['./system-selector.component.scss']
})

export class SystemSelectorComponent {

  private readonly systemsSelection: SystemsSelection;
  messageBoxMessage = '';
  errorMessage = false;

  constructor(private router: Router, private systemSelectorService: SystemSelectorService) {
    this.systemsSelection = router.getCurrentNavigation().extras.state.systemsSelection;
    this.selectionMessage();
  }

  private selectionMessage() {
    if (this.systemsSelection.maxSelected === -1) {
      this.messageBoxMessage = 'Choose any number systems';
    } else if (this.systemsSelection.maxSelected === 1) {
      this.messageBoxMessage = 'Choose one system';
    } else if (this.systemsSelection.amountToSelect() !== 0) {
      this.messageBoxMessage = `Choose ${this.systemsSelection.amountToSelect()} of ${this.systemsSelection.maxSelected} systems`;
    } else {
      this.messageBoxMessage = '';
    }
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
        this.selectionMessage();
        this.errorMessage = false;
      }
    } else {
      console.error('Coulnd\'t find requested area');
    }
  }

  requirementsUnfulfilled(): boolean {
    return !this.systemsSelection.unlimitedSelection() && this.systemsSelection.amountToSelect() !== 0;
  }

  confirmSelection() {
    this.systemSelectorService.subscriber.next(this.systemsSelection.available.filter(v => v.selected));
    this.systemSelectorService.subscriber.complete();
  }

  cancelOperation() {
    this.systemSelectorService.subscriber.complete();
  }
}
