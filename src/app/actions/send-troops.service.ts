import {Injectable} from '@angular/core';
import {GameSetupService} from '../game-setup.service';
import {SidekickService} from '../sidekick/sidekick.service';
import {NavigationExtras, Router} from '@angular/router';
import {SelectableSystem, SystemsSelection} from '../system-selector/systems-selection';
import {SystemSelectorService} from '../system-selector/system-selector.service';

@Injectable({
  providedIn: 'root'
})
export class SendTroopsService {


  constructor(
    private sidekickService: SidekickService,
    private systemSelectorService: SystemSelectorService,
    private router: Router) {
  }

  sendTroops() {
    const systemsSelection = new SystemsSelection();
    systemsSelection.available = SystemsSelection.convertToSelectableSystems(GameSetupService.getFreeSystems());
    systemsSelection.inactive = GameSetupService.getOccupiedSystems();
    this.systemSelectorService.resultWatch$.subscribe(
      (response: SelectableSystem[]) => {
        response.forEach(selectedSystem => {
          GameSetupService.occupySystem(selectedSystem.name);
        });
      },
      (err) => {
        console.error('Error: ' + err);
      },
      () => {
        this.sidekickService.close();
        this.router.navigateByUrl('/');
      }
    );
    const extras: NavigationExtras = {
      state: {
        systemsSelection
      }
    };
    this.router.navigate(['send-troops'], extras);
    this.sidekickService.open();

  }

}
