import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-basics',
  templateUrl: './basics.component.html'
})
export class BasicsComponent implements OnInit {

  // myForm: FormGroup = new FormGroup({
  //   name: new FormControl('RTX 4080ti'),
  //   price: new FormControl(0),
  //   existences: new FormControl(0)
  // });

  myForm: FormGroup = this.fb.group({
    name: [, [Validators.required, Validators.minLength(3)]],
    price: [, [Validators.required, Validators.min(0)]],
    existences: [,[Validators.required, Validators.min(0)]]
  }); 

  constructor(private fb: FormBuilder) { }
  ngOnInit(): void { 
    this.myForm.reset({
    name:'RTX 4080ti',
    price:1600
    });
  }

  validate(control:string) {
    return this.myForm.controls[control].errors 
    && this.myForm.controls[control].touched;
  }
  save(){
    if(this.myForm.invalid){
      this.myForm.markAllAsTouched();
      return;
    }
    console.log(this.myForm.value);
    this.myForm.reset();
  }


}
