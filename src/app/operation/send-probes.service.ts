import {Injectable} from '@angular/core';
import {GameSetupService} from '../game-setup.service';
import {SidekickService} from '../sidekick/sidekick.service';
import {NavigationExtras, Router} from '@angular/router';
import {SystemsSelection} from '../system-selector/systems-selection';
import {SystemSelectorService} from '../system-selector/system-selector.service';

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
    systemsSelection.available = SystemsSelection.convertToSelectableSystems(GameSetupService.getProbeDeck());
    systemsSelection.inactive = GameSetupService.getProbeHand();
    systemsSelection.maxSelected = 2;
    this.systemSelectorService.resultPromise.subscribe(
      (response) => {
        console.log(response);
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
