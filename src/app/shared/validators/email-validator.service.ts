import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AbstractControl, AsyncValidator, ValidationErrors } from '@angular/forms';
import { Observable } from 'rxjs';
import { map,delay } from 'rxjs/operators';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class EmailValidatorService implements AsyncValidator {

  baseUrl: string = environment.localhostURL;

  constructor(private http: HttpClient) { }
  
  validate(control: AbstractControl): Observable<ValidationErrors | null> {

    const email = control.value;
    
    return this.http.get<any[]>(`${this.baseUrl}?q=${email}`)
            .pipe(
             // delay(3000),
              map(resp=>{
                return (resp.length === 0)
                        ? null
                        : {takenEmail:true};
              })
            );

  }

}
