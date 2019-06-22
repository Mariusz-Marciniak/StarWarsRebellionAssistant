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

  subjugated(): System[] {
    return GameSetupService.getSubjugatedSystems();
  }

  rebelBase(): System {
    return GameSetupService.foundRebelBase();
  }

  positionStyle(system: System) {
    return {
      left: system.left,
      top: system.top,
    };
  }


}
