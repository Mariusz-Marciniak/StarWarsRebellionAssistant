import {Component, OnInit} from '@angular/core';
import {GameSetupService} from '../game-setup.service';
import {GameStateService} from '../game-state.service';
import {SidekickService} from '../sidekick/sidekick.service';

@Component({
  selector: 'app-wizard',
  templateUrl: './wizard.component.html',
  styleUrls: ['./wizard.component.scss']
})
export class WizardComponent implements OnInit {

  constructor(private sidekickService: SidekickService) {
  }

  ngOnInit() {
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

  sendProbe() {
    this.sidekickService.open();
  }

  sendTroops() {
    this.sidekickService.open();
  }

}
