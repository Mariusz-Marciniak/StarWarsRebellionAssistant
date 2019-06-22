import {Injectable} from '@angular/core';
import {System} from '../systems/system';

@Injectable({
  providedIn: 'root'
})
export class StorageService {

  constructor() {
  }

  static getProbeDeck(): System[] {
    return JSON.parse(sessionStorage.getItem('sw-probeDeck'));
  }

  static saveProbeDeck(deck: System[]) {
    sessionStorage.setItem('sw-probeDeck', JSON.stringify(deck));
  }

  static getSubjugatedSystems(): System[] {
    return JSON.parse(sessionStorage.getItem('sw-subjugated'));
  }

  static saveSubjugatedSystems(subjugatedSystems: System[]) {
    sessionStorage.setItem('sw-subjugated', JSON.stringify(subjugatedSystems));
  }

  static getRebelBase(): System {
    return JSON.parse(sessionStorage.getItem('sw-rebelBase'));
  }

  static saveRebelBase(system: System) {
    sessionStorage.setItem('sw-rebelBase', JSON.stringify(system));
  }

  static getFoundRebelBase(): System {
    return JSON.parse(sessionStorage.getItem('sw-foundRebelBase'));
  }

  static resetFoundRebelBase() {
    sessionStorage.removeItem('sw-foundRebelBase');
  }

  static saveFoundRebelBase(system: System) {
    sessionStorage.setItem('sw-foundRebelBase', JSON.stringify(system));
  }

  static getProbeHand(): System[] {
    return JSON.parse(sessionStorage.getItem('sw-probeHand'));
  }

  static saveProbeHand(hand: System[]) {
    sessionStorage.setItem('sw-probeHand', JSON.stringify(hand));
  }
}
