import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
//import { emailPattern, fullNamePattern, itCantBeRafiki } from 'src/app/shared/validators/validations';
import { ValidatorService } from '../../../shared/validators/validator.service';
import { EmailValidatorService } from '../../../shared/validators/email-validator.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html'
})
export class RegisterComponent implements OnInit {

  myForm: FormGroup = this.fb.group({
    name: ['', [Validators.required, Validators.pattern(this.vs.fullNamePattern)]],
    email: ['', [Validators.required, Validators.pattern(this.vs.emailPattern)],[this.evs]],
    username: ['', [Validators.required, this.vs.itCantBeRafiki]],
    password: ['', [Validators.required, Validators.minLength(6)]],
    confirmation: ['', [Validators.required]]
  }, {
    validators: [this.vs.equals('password', 'confirmation')]
  });
  

  constructor(private fb: FormBuilder,
              private vs: ValidatorService,
              private evs: EmailValidatorService) { }

  ngOnInit(): void {
    this.myForm.reset({
      name: 'David Lesmes',
      email: 'test1@test.com',
      username: 'rafikidota'
    });
  }

  validate(control: string) {
    return this.myForm.get(control)?.invalid
      && this.myForm.get(control)?.touched;
  }

  get emailErrorMsg():string{
    
    const errors = this.myForm.get('email')?.errors;

    if (errors?.['required']) {
      return 'El correo es obligatorio';
    }else if (errors?.['pattern']){
      return 'El valor no tiene formato de correo';      
    }else if (errors?.['takenEmail']){     
      return 'Ese correo ya esta tomado';      
    }
    
    return '';
  }

  save() {
    if (this.myForm.invalid) {
      this.myForm.markAllAsTouched();
      return;
    }
    console.log(this.myForm.value);
    this.myForm.reset();
  }


}
