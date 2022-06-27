import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-basics',
  templateUrl: './basics.component.html'
})
export class BasicsComponent implements OnInit {

  @ViewChild('myForm') myForm!: NgForm;

  initForm = {
    product:'RTX 4080t1',
    price:'10',
    existences:10
  }

  constructor() { }
  ngOnInit(): void { }

  save() {
    // console.log(this.myForm);
    console.log('post successfully');
    this.myForm.resetForm({
      price:0,
      existences:0
    });
  }
  validName() {
    return this.myForm?.controls['product']?.invalid 
    && this.myForm?.controls['product']?.touched;
  }
  validPrice() {
    
    return this.myForm?.controls['price']?.value < 0 
    && this.myForm?.controls['price']?.touched;
  }
}
