import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GameStateService {

  constructor() {
  }

  static getGameState() {
    return sessionStorage.getItem('sw-gameState');
  }

  static newGameStarted() {
    sessionStorage.setItem('sw-gameState', 'CHOOSE_SETUP');
  }

  static imperialSystemsChosen() {
    sessionStorage.setItem('sw-gameState', 'CHOOSE_IMPERIAL_DECK');
  }

  static setupDone() {
    sessionStorage.setItem('sw-gameState', 'GAME_IN_PROGRESS');
  }

}
