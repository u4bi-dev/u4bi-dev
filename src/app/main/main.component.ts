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
    this.blockImagePath = 'http://img.deusm.com/networkcomputing/2015/04/1319903/lego-297773_640.png';
    this.terminalImagePath = 'https://manjaro.ru/uploads/images/00/00/03/2016/08/31/d364a63c09.png';
  }

  ngOnInit() {
  }

}
