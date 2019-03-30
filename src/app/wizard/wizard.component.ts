import { Component, OnInit } from '@angular/core';
import { GameSetupService } from '../game-setup.service';
import { GameStateService } from '../game-state.service';
import { SelectOneComponent } from '../select-one/select-one.component';

@Component({
  selector: 'app-wizard',
  templateUrl: './wizard.component.html',
  styleUrls: ['./wizard.component.scss']
})
export class WizardComponent implements OnInit {

  constructor(private gameSetupService: GameSetupService, private gameStateService: GameStateService) { }

  ngOnInit() {
  }

  newGame() {
	this.gameSetupService.newGame();
  }
  standardSetup() {
	this.gameSetupService.standardSetup();
	this.gameSetupService.setRebelBase();
	this.gameStateService.imperialSystemsChosen();
  }
  advancedSetup() {
	this.gameSetupService.advancedSetup();
	this.gameSetupService.setRebelBase();
	this.gameStateService.imperialSystemsChosen();
  }
  standardDeck() {
	this.gameStateService.setupDone();
  }
  roteDeck() {
	this.gameStateService.setupDone();
  }
  gameState() {
	return this.gameStateService.getGameState();
  }
  guessBase() {

  }

}
