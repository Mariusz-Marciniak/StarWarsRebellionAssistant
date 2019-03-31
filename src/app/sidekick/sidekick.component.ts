import {Component, OnInit, Input} from '@angular/core';
import {animate, state, style, transition, trigger} from '@angular/animations';
import {SidekickState} from './sidekick-types';
import {SidekickService} from './sidekick.service';

@Component({
  selector: 'app-sidekick',
  templateUrl: './sidekick.component.html',
  styleUrls: ['./sidekick.component.scss'],
  animations: [
    trigger('slide', [
      state('opened', style({transform: 'translateX(-100vw)'})),
      state('closed', style({transform: 'translateX(0px)'})),
      transition('*=>*', animate('0.7s'))
    ])
  ]
})
export class SidekickComponent implements OnInit {

  constructor(private sidekickService: SidekickService) {
  }

  @Input() sidekickState: SidekickState;

  ngOnInit() {
    this.sidekickService.state.subscribe(s => this.sidekickState = s);
  }

  hidePanel() {
    this.sidekickService.close();
  }

  cancelOperation() {
    this.hidePanel();
  }
}

