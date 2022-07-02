import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { CountryService } from '../../services/country.service';

@Component({
  selector: 'app-selector',
  templateUrl: './selector.component.html'
})
export class SelectorComponent implements OnInit {

  myForm: FormGroup = this.fb.group({
    region: ['', [Validators.required], []]
  });
  regions: string[] = [];

  constructor(private fb: FormBuilder,
              private cs: CountryService) { }

  ngOnInit(): void {
    this.regions = this.cs.regiones;
  }

  save() {
    console.log(this.myForm.value);
  }

}
