import { Component, OnInit } from '@angular/core';
import { System } from '../system';

@Component({
  selector: 'app-system',
  templateUrl: './system.component.html',
  styleUrls: ['./system.component.css']
})
export class SystemComponent implements OnInit {
  system: System = {
    name: 'PSC',
    ssp_analyst: ["x", "y"],
    ssp_interviewee: ['z']
  };
  constructor() { }

  ngOnInit() {
  }

}
