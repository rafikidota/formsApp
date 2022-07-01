import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-selector',
  templateUrl: './selector.component.html'
})
export class SelectorComponent implements OnInit {

  myForm: FormGroup = this.fb.group({
    region:['',[Validators.required],[]]
  });

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void { }

  save(){
    console.log(this.myForm.value);   
  }

}
