import { Directive, Input } from '@angular/core';
import { AbstractControl, FormControl, NG_VALIDATORS, ValidationErrors, Validator } from '@angular/forms';

@Directive({
  selector: '[customMin][ngModel]',
  providers: [{
    provide: NG_VALIDATORS,
    useExisting: CustomMinDirective,
    multi: true
  }]
})
export class CustomMinDirective implements Validator {

  @Input() minimun!: number;

  constructor() {
    console.log('directive', this.minimun);

  }
  validate(control: FormControl): ValidationErrors | null {
    const inputValue = control.value;
    console.log('directive validate', inputValue);
    return (inputValue < this.minimun) ? {'customMin':true} : null;
  }

}
