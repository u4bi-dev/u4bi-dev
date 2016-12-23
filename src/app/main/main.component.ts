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
    this.blockImagePath = 'http://drive.google.com/uc?export=view&id=0B3XkfYbZArSfc0FXdWcxNnRpLWc';
    this.terminalImagePath = 'http://drive.google.com/uc?export=view&id=0B3XkfYbZArSfakxZUzJXU01ScjA';
  }

  ngOnInit() {
  }

}
