import {Component, OnInit} from '@angular/core';
import {GameSetupService} from '../game-setup.service';
import {System} from './system';

@Component({
  selector: 'app-systems',
  templateUrl: './systems.component.html',
  styleUrls: ['./systems.component.scss']
})

export class SystemsComponent implements OnInit {

  foundedRebelBase: System;

  constructor() {
  }

  ngOnInit() {
  }

  probeHand(): System[] {
    return GameSetupService.getProbeHand();
  }

  occupied(): System[] {
    return GameSetupService.getOccupiedSystems();
  }

  rebelBase(): System[] {
    if (this.foundedRebelBase) {
      return [this.foundedRebelBase];
    } else {
      if (GameSetupService.checkIfRebelBaseFound()) {
        this.foundedRebelBase = GameSetupService.getRebelBase();
        return [this.foundedRebelBase];
      } else {
        return [];
      }
    }
  }

  positionStyle(system: System) {
    return {
      left: system.left,
      top: system.top,
    };
  }


}
