import { Component, OnInit } from '@angular/core';

import { Control } from '../control';
import { ControlService } from '../control.service';
import { GroupedObservable } from 'rxjs';

@Component({
  selector: 'app-controls',
  templateUrl: './controls.component.html',
  styleUrls: ['./controls.component.css']
})
export class ControlsComponent implements OnInit {

  controls: Control [];

  constructor( private controlService: ControlService) { }

  ngOnInit() {
    this.getControls();
  }

  getControls(): void {
    this.controlService.getControls().subscribe(controls => this.controls = controls);
  }

}
