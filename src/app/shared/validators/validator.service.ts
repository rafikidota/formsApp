import { Injectable } from '@angular/core';
import { FormControl, ValidationErrors, AbstractControl, FormGroup } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class ValidatorService {
  fullNamePattern: string = '([a-zA-Z]+) ([a-zA-Z]+)';
  emailPattern: string = "^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$";

  constructor() { }

  itCantBeRafiki(control: FormControl): ValidationErrors | null {
    const value = control.value?.trim().toLowerCase();
    if (value === 'rafiki') {
      return {
        rafiki: true
      }
    }
    return null;
  }
  
  equals(password: string, confirmation: string) {
    return (formGroup: AbstractControl): ValidationErrors | null => {

      const pass = formGroup.get(password)?.value;
      const conf = formGroup.get(confirmation)?.value;

      if (pass !== conf) {
        formGroup.get(confirmation)?.setErrors({ notEquals: true });
        return { notEquals: true };
      }
      
      formGroup.get(confirmation)?.setErrors(null);//Si el campo de confirmar tiene errores a parte de que las contraseñas no sean iguales también se van a borrar

      return null;
    }
  }


}
