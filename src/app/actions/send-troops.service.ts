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
export class SendTroopsService {


  constructor(
    private sidekickService: SidekickService,
    private systemSelectorService: SystemSelectorService,
    private router: Router) {
  }

  sendTroops() {
    const systemsSelection = new SystemsSelection();
    systemsSelection.available = SystemsSelection.convertToSelectableSystems(GameUtilsService.getFreeSystems());
    systemsSelection.inactive = StorageService.getSubjugatedSystems();
    this.systemSelectorService.resultWatch$.subscribe(
      (response: SelectableSystem[]) => {
        response.forEach(selectedSystem => {
          GameUtilsService.subjugateSystem(selectedSystem.name);
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

  removeTroops() {
    const systemsSelection = new SystemsSelection();
    systemsSelection.available = SystemsSelection.convertToSelectableSystems(StorageService.getSubjugatedSystems());
    systemsSelection.inactive = GameUtilsService.getFreeSystems();
    this.systemSelectorService.resultWatch$.subscribe(
      (response: SelectableSystem[]) => {
        response.forEach(selectedSystem => {
          GameUtilsService.freeSystem(selectedSystem.name);
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
    this.router.navigate(['remove-troops'], extras);
    this.sidekickService.open();
  }
}
