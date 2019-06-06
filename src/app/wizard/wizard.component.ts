import {Component} from '@angular/core';
import {GameSetupService} from '../game-setup.service';
import {GameStateService} from '../game-state.service';
import {SidekickService} from '../sidekick/sidekick.service';
import {NavigationExtras, Router} from '@angular/router';
import {SystemsSelection} from '../system-selector/systems-selection';

@Component({
  selector: 'app-wizard',
  templateUrl: './wizard.component.html',
  styleUrls: ['./wizard.component.scss']
})
export class WizardComponent {

  constructor(
    private sidekickService: SidekickService,
    private router: Router) {
  }

  newGame() {
    GameSetupService.newGame();
  }

  standardSetup() {
    GameSetupService.standardSetup();
    GameSetupService.setRebelBase();
    GameStateService.imperialSystemsChosen();
  }

  advancedSetup() {
    GameSetupService.advancedSetup();
    GameSetupService.setRebelBase();
    GameStateService.imperialSystemsChosen();
  }

  standardDeck() {
    GameStateService.setupDone();
  }

  roteDeck() {
    GameStateService.setupDone();
  }

  gameState() {
    return GameStateService.getGameState();
  }

  sendProbes() {
    const systemsSelection = new SystemsSelection();
    systemsSelection.available = SystemsSelection.convertToSelectableSystems(GameSetupService.getProbeDeck());
    systemsSelection.inactive = GameSetupService.getProbeHand();
    systemsSelection.maxSelected = 2;
    const extras: NavigationExtras = {
      state: {
        systemsSelection
      }
    };
    this.router.navigate(['send-probe'], extras);
    this.sidekickService.open();
  }

  sendTroops() {
    this.router.navigate(['send-troops']);
    this.sidekickService.open();
  }

}
