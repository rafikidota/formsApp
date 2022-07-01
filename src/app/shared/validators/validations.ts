import { FormControl } from "@angular/forms";

export const fullNamePattern: string = '([a-zA-Z]+) ([a-zA-Z]+)';
export const emailPattern: string = "^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$";

export const itCantBeRafiki = (control: FormControl) => {
    const value = control.value?.trim().toLowerCase();
    if (value === 'rafiki') {
      return {
        rafiki: true
      }
    }
    return null;
  }