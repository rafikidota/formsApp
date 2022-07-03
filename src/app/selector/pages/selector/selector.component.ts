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
    country: ['', [Validators.required], []],
    border: ['', [Validators.required], []]
  });

  //Selectores
  regions: string[] = this.cs.regiones;
  countries: SmallCountry[] = [];
  borders: SmallCountry[] = [];

  //UI
  loading: boolean = false;

  get regionIsEmpty() {
    return this.myForm.get('region')?.value === '';
  }
  get countryIsEmpty() {
    return this.myForm.get('country')?.value === '';
  }
  constructor(private fb: FormBuilder,
    private cs: CountryService) { }

  ngOnInit(): void {

    //Cuando cambia la región
    this.myForm.get('region')?.valueChanges
      .pipe(
        tap(() => {
          this.loading = true;
          this.countries = [];
          this.myForm.get('country')?.reset('');
        }),
        switchMap(region => {
          if (this.regionIsEmpty) {
            return [];
          }
          return this.cs.getCountriesByRegion(region);
        })
      ).subscribe(countries => {
        this.loading = false;
        this.countries = this.sort(countries);
      });

    //Cuando cambia el país
    this.myForm.get('country')?.valueChanges
      .pipe(
        tap(() => {
          this.loading = true;
          this.borders = [];
          this.myForm.get('border')?.reset('');
        }),
        switchMap(cca3 => {

          if (this.countryIsEmpty) {
            return [];
          }
          return this.cs.getCountryByCCA3(cca3);
        }),
        switchMap(country => {
          return this.cs.getCountriesyByCCA3Small(country[0].borders)
        })
      )
      .subscribe(borders => {
        //this.borders = country[0].borders || [];
        this.borders = this.sort(borders);
        this.loading = false;
      });


  }

  save() {
    console.log(this.myForm.value);
  }

  sort(countries: SmallCountry[]) {
    
    function SortArray(x: SmallCountry, y: SmallCountry) {
      if (x.name.common < y.name.common) { return -1; }
      if (x.name.common > y.name.common) { return 1; }
      return 0;
    }
    
    countries = countries.sort(SortArray);  
    return countries;
  }
}