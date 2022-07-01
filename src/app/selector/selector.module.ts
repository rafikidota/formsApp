import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { SelectorRoutingModule } from './selector-routing.module';
import { SelectorComponent } from './pages/selector/selector.component';


@NgModule({
  declarations: [
    SelectorComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    SelectorRoutingModule
  ]
})
export class SelectorModule { }
