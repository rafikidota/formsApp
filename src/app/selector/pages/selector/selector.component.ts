import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { CountryService } from '../../services/country.service';
import { SmallCountry } from '../../interfaces/country.interface';
import { switchMap, tap } from 'rxjs';

@Component({
  selector: 'app-selector',
  templateUrl: './selector.component.html'
})
export class SelectorComponent implements OnInit {

  myForm: FormGroup = this.fb.group({
    region: ['', [Validators.required], []],
    country: ['', [Validators.required], []]
  });
  regions: string[] = this.cs.regiones;
  countries: SmallCountry[] = [];

  get regionIsEmpty() {
    return this.myForm.get('region')?.value === '';
  }
  constructor(private fb: FormBuilder,
    private cs: CountryService) { }

  ngOnInit(): void {

    this.myForm.get('region')?.valueChanges
      .pipe(
        tap((_) => {
          this.myForm.get('country')?.reset('');
          if (this.regionIsEmpty) {
            this.countries = [];
          }
        }),
        switchMap(region => {
          if (this.regionIsEmpty) {
            return []
          }
          return this.cs.getCountriesByRegion(region)
        }
        )
      ).subscribe(countries => {
        this.countries = countries;
      });

  }

  save() {
    console.log(this.myForm.value);
  }

}
function _(_: any): import("rxjs").OperatorFunction<any, any> {
  throw new Error('Function not implemented.');
}

