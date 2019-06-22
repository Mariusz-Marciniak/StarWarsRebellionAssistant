import {Injectable} from '@angular/core';
import {System, SYSTEMS} from '../systems/system';
import {StorageService} from './storage.service';

@Injectable({
  providedIn: 'root'
})
export class GameUtilsService {

  static getFreeSystems() {
    const subjugatedNames = new Set(StorageService.getSubjugatedSystems().map(system => system.name));
    return SYSTEMS.slice().filter(system => !subjugatedNames.has(system.name));
  }

  static checkIfRebelBaseFound(): string {
    const rebelBaseName = StorageService.getRebelBase().name;
    return System.concatUniqueSystems(StorageService.getSubjugatedSystems(), StorageService.getProbeHand())
      .map(system => system.name).find(systemName => systemName === rebelBaseName);
  }

  static startingImperialSystem(name: string) {
    GameUtilsService.drawProbeCard(name);
    GameUtilsService.subjugateSystem(name);
  }

  static drawProbeCard(name: string) {
    let system;
    const probeDeck = StorageService.getProbeDeck();
    const probeHand = StorageService.getProbeHand();
    for (let i = 0; i < probeDeck.length; i++) {
      system = probeDeck[i];
      if (system.name === name) {
        probeDeck.splice(i, 1);
        probeHand.push(system);
        break;
      }
    }
    StorageService.saveProbeHand(probeHand);
    StorageService.saveProbeDeck(probeDeck);
  }

  static subjugateSystem(name: string) {
    let system;
    const subjugatedSystems = StorageService.getSubjugatedSystems();
    for (system of SYSTEMS) {
      if (system.name === name) {
        subjugatedSystems.push(system);
        break;
      }
    }
    StorageService.saveSubjugatedSystems(subjugatedSystems);
  }

  static freeSystem(name: string) {
    const subjugatedSystems = StorageService.getSubjugatedSystems();
    for (let i = 0; i < subjugatedSystems.length; i++) {
      if (subjugatedSystems[i].name === name) {
        subjugatedSystems.splice(i, 1);
        break;
      }
    }
    StorageService.saveSubjugatedSystems(subjugatedSystems);
  }

  static foundRebelBase(): System {
    if (!StorageService.getFoundRebelBase()) {
      if (GameUtilsService.checkIfRebelBaseFound()) {
        StorageService.saveFoundRebelBase(StorageService.getRebelBase());
        return StorageService.getRebelBase();
      }
    }
    return StorageService.getFoundRebelBase();
  }
}
