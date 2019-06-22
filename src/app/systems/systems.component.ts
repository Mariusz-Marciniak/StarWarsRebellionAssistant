import {Component, OnInit} from '@angular/core';
import {System} from './system';
import {StorageService} from '../game-controllers/storage.service';
import {GameUtilsService} from '../game-controllers/game-utils.service';

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
    return StorageService.getProbeHand();
  }

  subjugated(): System[] {
    return StorageService.getSubjugatedSystems();
  }

  rebelBase(): System {
    return GameUtilsService.foundRebelBase();
  }

  positionStyle(system: System) {
    return {
      left: system.left,
      top: system.top,
    };
  }


}
