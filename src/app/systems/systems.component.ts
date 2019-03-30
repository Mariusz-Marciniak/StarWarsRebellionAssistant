import { Component, OnInit } from '@angular/core';
import { GameSetupService } from '../game-setup.service';
import { System } from './system';

@Component({
  selector: 'app-systems',
  templateUrl: './systems.component.html',
  styleUrls: ['./systems.component.scss']
})

export class SystemsComponent implements OnInit {
  constructor(private gameSetupService: GameSetupService) { }

  ngOnInit() {
  }

  probeHand(): System[] {
	return this.gameSetupService.getProbeHand();
  }

  positionStyle(system: System)  {
	const styles = {
		left : system.left,
		top : system.top,
	};
	return styles;
  }


}
