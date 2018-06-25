import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GameStateService {

  constructor() { }
  getGameState() {
	return sessionStorage.getItem("sw-gameState");
  }

  newGameStarted() {
	sessionStorage.setItem("sw-gameState","CHOOSE_SETUP");
  }

  imperialSystemsChosen() {
	sessionStorage.setItem("sw-gameState","CHOOSE_IMPERIAL_DECK");
  }

  setupDone() {
	sessionStorage.setItem("sw-gameState","GAME_IN_PROGRESS");
  }

}
