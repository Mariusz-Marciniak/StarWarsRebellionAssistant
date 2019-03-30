import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-select-one',
  templateUrl: './select-one.component.html',
  styleUrls: ['./select-one.component.scss']
})
export class SelectOneComponent implements OnInit {

  constructor() { }

  options = [];

  ngOnInit() {
  }

  chooseOption(option) {
    console.log(option);
  }
}
