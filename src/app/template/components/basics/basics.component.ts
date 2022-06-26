import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-basics',
  templateUrl: './basics.component.html'
})
export class BasicsComponent implements OnInit {

  @ViewChild('myForm') myForm!: NgForm;

  constructor() { }
  ngOnInit(): void { }

  save() {
    console.log(this.myForm);
  }
  validName() {
    // return this.myForm.controls.product?.invalid && this.myForm.controls.product.touched;
  }
  validPrice() {
    // return this.myForm!.controls!.price?.value < 0 && this.myForm.controls.price.touched;
  }
}
