import { HttpParams, HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Country, SmallCountry } from '../interfaces/country.interface';
import { combineLatest, Observable, of } from 'rxjs';

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
    return new HttpParams().set('fields', 'name,cca3');
  }
  getCountriesByRegion(query: string): Observable<SmallCountry[]> {
    const url = `${this._rc}/region/${query}`;
    return this.http.get<SmallCountry[]>(url, { params: this.httpParams });
  }
  getCountryByCCA3(query: string): Observable<Country[]> {
    const url = `${this._rc}/alpha/${query}`;
    return this.http.get<Country[]>(url);
  }
  getCountryByCCA3Small(query: string): Observable<SmallCountry[]> {
    const url = `${this._rc}/alpha/${query}`;
    return this.http.get<SmallCountry[]>(url, { params: this.httpParams });
  }

  // Este es el metodo de Fernando Herrera
  // getCountriesyByCCA3Small(query: string[]): Observable<SmallCountry[]> {
  //   if (!query) {
  //     return of([]);
  //   }
  //   const requests: Observable<SmallCountry>[]=[];
  //   query.forEach(cca3 => {
  //     const request = this.getCountryByCCA3Small(cca3);
  //     requests.push(request); //error, esta linea no pincha
  //   });
  //   return combineLatest(requests);
  // }

  getCountriesyByCCA3Small(query: string[]): Observable<SmallCountry[]> {
    if (!query) {
      return of([]);
    }
    const codes = query.join();
    const httpParams = new HttpParams().set('codes', codes).set('fields', 'name,cca3');
    const url = `${this._rc}/alpha`;
    return this.http.get<SmallCountry[]>(url, { params: httpParams });
  }


  constructor(private http: HttpClient) { }
}
