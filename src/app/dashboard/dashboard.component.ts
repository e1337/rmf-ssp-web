import { Component, OnInit } from '@angular/core';
import { Control } from '../control';
import { ControlService } from '../control.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  controls: Control[] = [];

  constructor(private controlService: ControlService) { }

  ngOnInit() {
    this.getControls();
  }

  getControls(): void {
    this.controlService.getControls().subscribe(controls => this.controls = controls);
  }
}
