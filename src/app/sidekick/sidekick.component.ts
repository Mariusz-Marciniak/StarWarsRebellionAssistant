import {Component, OnInit, Input} from '@angular/core';
import {animate, state, style, transition, trigger} from '@angular/animations';

@Component({
  selector: 'app-sidekick',
  templateUrl: './sidekick.component.html',
  styleUrls: ['./sidekick.component.scss'],
  animations: [
    trigger('slide', [
      state('opened', style({transform: 'translateX(50vw)'})),
      state('closed', style({transform: 'translateX(100vw)'})),
      transition('*=>*', animate('0.7s'))
    ])
  ]
})
export class SidekickComponent implements OnInit {

  constructor() {
  }

  @Input() sidekickState: SidekickState = 'opened';

  ngOnInit() {
  }

  hidePanel() {
    this.sidekickState = 'closed';
  }

  cancelOperation() {
    this.hidePanel();
  }
}

type SidekickState = 'opened' | 'closed';
