import { HttpParams, HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { SmallCountry } from '../interfaces/country.interface';

@Injectable({
  providedIn: 'root'
})
export class CountryService {
  private _regions: string[] = ['Africa', 'Americas', 'Asia', 'Europe', 'Oceania'];
  private _rc: string = environment.restCountriesApiURL; //'https://restcountries.com/v3.1';
  get regiones(): string[] {
    return [...this._regions];
  }
  get httpParams() {
    //return new HttpParams().set('fields', 'name,capital,flags,cca2,population');
    return new HttpParams().set('fields', 'name,cca3');
  }
  getCountriesByRegion(query: string) {
    const url = `${this._rc}/region/${query}/`;

    return this.http.get<SmallCountry[]>(url, { params: this.httpParams });
  }

  constructor(private http: HttpClient) { }
}
