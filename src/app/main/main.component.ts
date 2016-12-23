import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
  blockImagePath : string;
  terminalImagePath : string;

  constructor() {
    this.blockImagePath = '../../../images/block.png';
    this.terminalImagePath = '../../../images/Terminal.png';
  }

  ngOnInit() {
  }

}
