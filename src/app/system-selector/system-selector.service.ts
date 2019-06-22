import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SystemSelectorService {

  subscriber: any;

  resultWatch$ = new Observable(subscriber => {
    this.subscriber = subscriber;
    return {
      unsubscribe(): void {
      }
    };
  });

  constructor() {
  }
}
