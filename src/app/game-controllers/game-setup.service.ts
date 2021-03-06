import {Injectable} from '@angular/core';
import {SYSTEMS} from '../systems/system';
import {GameStateService} from './game-state.service';
import {StorageService} from './storage.service';
import {GameUtilsService} from './game-utils.service';

@Injectable({
  providedIn: 'root'
})
export class GameSetupService {

  static imperialSystems = [
    'Corellia', 'Mandalore', 'Mygeeto', 'Sullust',
    'Saleucami', 'Mustafar', 'Rodia'
  ];

  constructor() {
    if (GameStateService.getGameState() === undefined) {
      GameSetupService.newGame();
    }
  }

  static standardSetup() {
    GameUtilsService.startingImperialSystem('Coruscant');
    GameUtilsService.startingImperialSystem('Mandalore');
    GameUtilsService.startingImperialSystem('Saleucami');
    GameUtilsService.startingImperialSystem('Corellia');
    GameUtilsService.startingImperialSystem('Sullust');
    GameUtilsService.startingImperialSystem('Mustafar');
  }

  static advancedSetup() {
    GameUtilsService.startingImperialSystem('Coruscant');
    const systems = GameSetupService.imperialSystems.slice();
    for (let i = 0; i < 5; i++) {
      GameUtilsService.startingImperialSystem(GameSetupService.removeRandomFrom(systems));
    }
  }

  private static removeRandomFrom(collection) {
    const index = Math.floor(Math.random() * 1000) % collection.length;
    const result = collection[index];
    collection.splice(index, 1);
    return result;
  }

  static setRebelBase() {
    const systemsForBase = [];
    for (const system of StorageService.getProbeDeck()) {
      for (let i = 0; i < system.basePoints; i++) {
        systemsForBase.push(system);
      }
    }
    StorageService.saveRebelBase(GameSetupService.removeRandomFrom(systemsForBase));
  }


  static newGame() {
    StorageService.saveProbeDeck(SYSTEMS.slice());
    StorageService.saveProbeHand([]);
    StorageService.saveSubjugatedSystems([]);
    StorageService.resetFoundRebelBase();
    GameStateService.newGameStarted();
  }

}
