import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, Validators, FormControl } from '@angular/forms';


@Component({
  selector: 'app-dinamics',
  templateUrl: './dinamics.component.html'
})
export class DinamicsComponent implements OnInit {
  newFav: FormControl = this.fb.control('', Validators.required);
  myForm = this.fb.group({
    name: ['', [Validators.required, Validators.minLength(3)]],
    favorites: this.fb.array([
      ['Metal Gear', Validators.required],
      ['Death Stranding', Validators.required]
    ], Validators.required)
  });

  constructor(private fb: FormBuilder) { }
  ngOnInit(): void { }

  get favoritesAsFormArray() {
    return this.myForm.get('favorites') as FormArray;
  }
  get favorites() {
    return this.favoritesAsFormArray.controls;
  }
  save() {
    if (this.myForm.invalid) {
      this.myForm.markAllAsTouched();
      return;
    }
    console.log(this.myForm.value);
    this.myForm.reset();
  }
  delete(index: number) {
    this.favoritesAsFormArray.removeAt(index);  
  }
  add() {
    if (this.newFav.invalid) { return; }
    //this.favoritesAsFormArray.push(new FormControl(this.newFav.value, Validators.required));
    this.favoritesAsFormArray.push(this.fb.control(this.newFav.value, Validators.required));
    this.newFav.reset();
  }
  validate(control: string) {
    return this.myForm.controls[control].touched
           && this.myForm.controls[control].errors;
  }
}
