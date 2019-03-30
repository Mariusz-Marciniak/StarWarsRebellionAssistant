import { Injectable } from '@angular/core';
import { System, SYSTEMS } from './systems/system';
import { GameStateService } from './game-state.service';

@Injectable({
  providedIn: 'root'
})
export class GameSetupService {

  imperialSystems = [
    'Corellia', 'Mandalore', 'Mygeeto', 'Sullust',
    'Saleucami', 'Mustafar', 'Rodia'
  ];

  constructor(private gameStateService: GameStateService) {
    if (this.gameStateService.getGameState() === undefined) {
      this.newGame();
    }
  }

  standardSetup() {
    this.drawProbeCard('Coruscant');
    this.drawProbeCard('Mandalore');
    this.drawProbeCard('Saleucami');
    this.drawProbeCard('Corellia');
    this.drawProbeCard('Sullust');
    this.drawProbeCard('Mustafar');
  }

  advancedSetup() {
	this.drawProbeCard('Coruscant');
	const systems = this.imperialSystems.slice();
	for (let i = 0; i < 5; i++) {
		this.drawProbeCard(this.removeRandomFrom(systems));
	}
  }

  removeRandomFrom(collection) {
	const index = Math.floor(Math.random() * 1000) % collection.length;
	const result = collection[index];
	collection.splice(index, 1);
	return result;
  }

  setRebelBase() {
    const systemsForBase = [];
	   for (const system of this.getProbeDeck()) {
	  for (let i = 0; i < system.basePoints; i++) {
		systemsForBase.push(system);
	  }
	}
	   this.saveRebelBase(this.removeRandomFrom(systemsForBase));
  }


  newGame() {
	this.saveProbeDeck(SYSTEMS.slice());
	this.saveProbeHand([]);
	this.saveProbeHand([]);
	this.gameStateService.newGameStarted();
  }

  getProbeDeck(): System[] {
	return JSON.parse(sessionStorage.getItem('sw-probeDeck'));
  }

  saveProbeDeck(deck: System[]) {
	sessionStorage.setItem('sw-probeDeck', JSON.stringify(deck));
  }

  getRebelBase(): System {
	return JSON.parse(sessionStorage.getItem('sw-rebelBase'));
  }

  saveRebelBase(system: System) {
	sessionStorage.setItem('sw-rebelBase', JSON.stringify(system));
  }

  getProbeHand(): System[] {
	return JSON.parse(sessionStorage.getItem('sw-probeHand'));
  }

  saveProbeHand(hand: System[]) {
	sessionStorage.setItem('sw-probeHand', JSON.stringify(hand));
  }

  drawProbeCard(name: String) {
	let system;
	const probeDeck = this.getProbeDeck();
	const probeHand = this.getProbeHand();
	for (let i = 0; i < probeDeck.length; i++) {
		system = probeDeck[i];
		if (system.name === name) {
			console.debug('drawing ' + name);
			probeDeck.splice(i, 1);
			probeHand.push(system);
			break;
		}
	}
	this.saveProbeHand(probeHand);
	this.saveProbeDeck(probeDeck);
  }
}
