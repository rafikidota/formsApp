import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { TemplateRoutingModule } from './template-routing.module';
import { SwitchesComponent } from './components/switches/switches.component';
import { DinamicsComponent } from './components/dinamics/dinamics.component';
import { BasicsComponent } from './components/basics/basics.component';
import { CustomMinDirective } from './directives/custom-min.directive';


@NgModule({
  declarations: [
    SwitchesComponent,
    DinamicsComponent,
    BasicsComponent,
    CustomMinDirective
  ],
  imports: [
    CommonModule,
    FormsModule,
    TemplateRoutingModule
  ]
})
export class TemplateModule { }
