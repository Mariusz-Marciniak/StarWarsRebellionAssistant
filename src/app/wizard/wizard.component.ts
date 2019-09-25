import {Component} from '@angular/core';
import {GameSetupService} from '../game-controllers/game-setup.service';
import {GameStateService} from '../game-controllers/game-state.service';
import {SendProbesService} from '../actions/send-probes.service';
import {SendTroopsService} from '../actions/send-troops.service';
import {Router} from "@angular/router";

@Component({
  selector: 'app-wizard',
  templateUrl: './wizard.component.html',
  styleUrls: ['./wizard.component.scss']
})
export class WizardComponent {

  constructor(private sendProbesService: SendProbesService,
              private sendTroopsService: SendTroopsService,
              private router: Router) {
  }

  newGame() {
    GameSetupService.newGame();
    this.router.navigate(['/']);
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
    this.sendProbesService.sendProbes();
  }

  sendTroops() {
    this.sendTroopsService.sendTroops();
  }

  freeSystems() {
    this.sendTroopsService.removeTroops();
  }
}
