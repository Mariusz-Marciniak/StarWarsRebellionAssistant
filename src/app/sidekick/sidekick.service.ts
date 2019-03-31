import { Injectable } from '@angular/core';
import {BehaviorSubject} from 'rxjs';
import {SidekickState} from './sidekick-types';

@Injectable({
  providedIn: 'root'
})
export class SidekickService {

  private stateSubject = new BehaviorSubject<SidekickState>('closed');
  state = this.stateSubject.asObservable();

  constructor() { }

  open() {
    this.stateSubject.next('opened');
  }

  close() {
    this.stateSubject.next('closed');
  }

}


