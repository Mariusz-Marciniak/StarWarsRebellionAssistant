import {Injectable} from '@angular/core';
import {SidekickService} from '../sidekick/sidekick.service';
import {NavigationExtras, Router} from '@angular/router';
import {SelectableSystem, SystemsSelection} from '../system-selector/systems-selection';
import {SystemSelectorService} from '../system-selector/system-selector.service';
import {StorageService} from '../game-controllers/storage.service';
import {GameUtilsService} from '../game-controllers/game-utils.service';

@Injectable({
  providedIn: 'root'
})
export class SendProbesService {

  constructor(
    private sidekickService: SidekickService,
    private systemSelectorService: SystemSelectorService,
    private router: Router) {
  }

  sendProbes() {
    const systemsSelection = new SystemsSelection();
    systemsSelection.available = SystemsSelection.convertToSelectableSystems(StorageService.getProbeDeck());
    systemsSelection.inactive = StorageService.getProbeHand();
    systemsSelection.maxSelected = 2;
    this.systemSelectorService.resultWatch$.subscribe(
      (response: SelectableSystem[]) => {
        response.forEach(selectedSystem => {
          GameUtilsService.drawProbeCard(selectedSystem.name);
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
    this.router.navigate(['send-probe'], extras);
    this.sidekickService.open();

  }

}
