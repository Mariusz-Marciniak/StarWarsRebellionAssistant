import {Component, OnInit} from '@angular/core';
import {AreaComponent} from '@marciniak/map/lib/area.component';
import {SYSTEMS} from '../systems/system';

@Component({
  selector: 'app-region-selector',
  templateUrl: './region-selector.component.html',
  styleUrls: ['./region-selector.component.scss']
})

export class RegionSelectorComponent implements OnInit {

  constructor() {
  }

  ngOnInit() {
  }

  selectedRegion(event: MouseEvent) {
    event.preventDefault();
    const area = event.target as unknown as AreaComponent;
    if (area) {
      console.log(area);
    }
  }

  allSystems() {
    return SYSTEMS;
  }
}
