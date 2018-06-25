import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-select-one',
  templateUrl: './select-one.component.html',
  styleUrls: ['./select-one.component.css']
})
export class SelectOneComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  options = [];
  
  chooseOption(option) {
    console.log(option);
  }
}
