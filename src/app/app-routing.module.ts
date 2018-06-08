import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ControlsComponent } from './controls/controls.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ControlDetailComponent } from './control-detail/control-detail.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/dashboard',
    pathMatch: 'full'
  },
  {
    path: 'dashboard',
    component: DashboardComponent
  },
  {
    path: 'controls',
    component: ControlsComponent
  },
  {
    path: 'detail/:id',
    component: ControlDetailComponent
  }

];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
