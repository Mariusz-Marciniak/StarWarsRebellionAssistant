import {Injectable} from '@angular/core';
import {System, SYSTEMS} from './systems/system';
import {GameStateService} from './game-state.service';

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
    GameSetupService.drawProbeCard('Coruscant');
    GameSetupService.drawProbeCard('Mandalore');
    GameSetupService.drawProbeCard('Saleucami');
    GameSetupService.drawProbeCard('Corellia');
    GameSetupService.drawProbeCard('Sullust');
    GameSetupService.drawProbeCard('Mustafar');
  }

  static advancedSetup() {
    GameSetupService.drawProbeCard('Coruscant');
    const systems = GameSetupService.imperialSystems.slice();
    for (let i = 0; i < 5; i++) {
      GameSetupService.drawProbeCard(GameSetupService.removeRandomFrom(systems));
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
    for (const system of GameSetupService.getProbeDeck()) {
      for (let i = 0; i < system.basePoints; i++) {
        systemsForBase.push(system);
      }
    }
    GameSetupService.saveRebelBase(GameSetupService.removeRandomFrom(systemsForBase));
  }


  static newGame() {
    GameSetupService.saveProbeDeck(SYSTEMS.slice());
    GameSetupService.saveProbeHand([]);
    GameSetupService.saveOccupiedSystems([]);
    GameStateService.newGameStarted();
  }

  static getProbeDeck(): System[] {
    return JSON.parse(sessionStorage.getItem('sw-probeDeck'));
  }

  private static saveProbeDeck(deck: System[]) {
    sessionStorage.setItem('sw-probeDeck', JSON.stringify(deck));
  }

  static getOccupiedSystems(): System[] {
    return JSON.parse(sessionStorage.getItem('sw-occupied'));
  }

  private static saveOccupiedSystems(occupiedSystems: System[]) {
    sessionStorage.setItem('sw-occupied', JSON.stringify(occupiedSystems));
  }

  static getFreeSystems() {
    const occupiedNames = new Set(this.getOccupiedSystems().map(system => system.name));
    return SYSTEMS.slice().filter(system => !occupiedNames.has(system.name));
  }

  private static getRebelBase(): System {
    return JSON.parse(sessionStorage.getItem('sw-rebelBase'));
  }

  private static saveRebelBase(system: System) {
    sessionStorage.setItem('sw-rebelBase', JSON.stringify(system));
  }

  static getProbeHand(): System[] {
    return JSON.parse(sessionStorage.getItem('sw-probeHand'));
  }

  static saveProbeHand(hand: System[]) {
    sessionStorage.setItem('sw-probeHand', JSON.stringify(hand));
  }

  static drawProbeCard(name: string) {
    let system;
    const probeDeck = GameSetupService.getProbeDeck();
    const probeHand = GameSetupService.getProbeHand();
    for (let i = 0; i < probeDeck.length; i++) {
      system = probeDeck[i];
      if (system.name === name) {
        probeDeck.splice(i, 1);
        probeHand.push(system);
        break;
      }
    }
    GameSetupService.saveProbeHand(probeHand);
    GameSetupService.saveProbeDeck(probeDeck);
  }

  static occupySystem(name: string) {
    let system;
    const occupiedSystems = GameSetupService.getOccupiedSystems();
    for (system of SYSTEMS) {
      if (system.name === name) {
        occupiedSystems.push(system);
        break;
      }
    }
    GameSetupService.saveOccupiedSystems(occupiedSystems);
  }

  static freeSystem(name: string) {
    const occupiedSystems = GameSetupService.getOccupiedSystems();
    for (let i = 0; i < occupiedSystems.length; i++) {
      if (occupiedSystems[i].name === name) {
        occupiedSystems.splice(i, 1);
        break;
      }
    }
    GameSetupService.saveOccupiedSystems(occupiedSystems);
  }

}
