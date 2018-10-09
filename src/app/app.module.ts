import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { ControlsComponent } from './controls/controls.component';
import { SystemComponent } from './system/system.component';
import { ControlDetailComponent } from './control-detail/control-detail.component';
import { MessagesComponent } from './messages/messages.component';
import { AppRoutingModule } from './/app-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HttpClientModule } from '@angular/common/http';
import { GroupByPipe } from './pipes/groupBy/groupby';


@NgModule({
  declarations: [
    AppComponent,
    ControlsComponent,
    SystemComponent,
    ControlDetailComponent,
    MessagesComponent,
    DashboardComponent,
    GroupByPipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
