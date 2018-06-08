import { Component, OnInit, Input } from '@angular/core';
import { Control } from '../control';
import { ActivatedRoute } from '@angular/router';
import { ControlService } from '../control.service';
import { Location } from '@angular/common';


@Component({
  selector: 'app-control-detail',
  templateUrl: './control-detail.component.html',
  styleUrls: ['./control-detail.component.css']
})

export class ControlDetailComponent implements OnInit {
  @Input() control: Control;
  constructor(
    private route: ActivatedRoute,
    private controlService: ControlService,
    private location: Location
  ) {
  }

  ngOnInit() {
    this.getControl();
  }

  getControl(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.controlService.getControl(id).subscribe(control => {
      this.control = control;
    });
  }

  goBack(): void {
    this.location.back();
  }

}
