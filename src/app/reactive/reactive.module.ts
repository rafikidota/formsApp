import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ReactiveRoutingModule } from './reactive-routing.module';
import { BasicsComponent } from './components/basics/basics.component';
import { DinamicsComponent } from './components/dinamics/dinamics.component';
import { SwitchesComponent } from './components/switches/switches.component';


@NgModule({
  declarations: [
    BasicsComponent,
    DinamicsComponent,
    SwitchesComponent
  ],
  imports: [
    CommonModule,
    ReactiveRoutingModule
  ]
})
export class ReactiveModule { }
