import {Component, OnInit} from '@angular/core';
import {GameSetupService} from '../game-setup.service';
import {System} from './system';

@Component({
  selector: 'app-systems',
  templateUrl: './systems.component.html',
  styleUrls: ['./systems.component.scss']
})

export class SystemsComponent implements OnInit {
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

  positionStyle(system: System) {
    return {
      left: system.left,
      top: system.top,
    };
  }


}
