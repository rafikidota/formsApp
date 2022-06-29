import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';


@Component({
  selector: 'app-switches',
  templateUrl: './switches.component.html'
})
export class SwitchesComponent implements OnInit {

  myForm = this.fb.group({
    genre: ['M', Validators.required],
    notifications: [false, Validators.required],
    terms: [false, Validators.requiredTrue]
  });

  person = {
    genre: 'F',
    notifications: true
  }

  constructor(private fb: FormBuilder) { }
  ngOnInit(): void {
    this.myForm.reset({
      ...this.person,
      terms: false
    });
    this.myForm.valueChanges.subscribe(({terms,...rest}) => {
      //delete form.terms;
      //this.person = form;      
      this.person = rest;
      //console.log(this.person);
    });
  }
  save() {
    const formValue = this.myForm.value;
    delete formValue.terms;
    this.person = formValue;
    console.log(this.person);

  }

}
