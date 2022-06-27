import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { TemplateRoutingModule } from './template-routing.module';
import { BasicsComponent } from './components/basics/basics.component';
import { DinamicsComponent } from './components/dinamics/dinamics.component';
import { SwitchesComponent } from './components/switches/switches.component';
import { CustomMinDirective } from './directives/custom-min.directive';


@NgModule({
  declarations: [
    BasicsComponent,
    DinamicsComponent,
    SwitchesComponent,
    CustomMinDirective
  ],
  imports: [
    CommonModule,
    FormsModule,
    TemplateRoutingModule
  ]
})
export class TemplateModule { }
