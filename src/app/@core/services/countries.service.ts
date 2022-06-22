import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CountriesService {

  url: string = 'https://restcountries.com/v3.1';

  constructor(private http: HttpClient) { }

  getAll(){
    const path: string = `${this.url}/all`;
    return this.http.get<any>(path);
  }

  getByName(nameCountry: string){
    const path: string = `${this.url}/name/${nameCountry}`;
    return this.http.get<any>(path);
  }
}
