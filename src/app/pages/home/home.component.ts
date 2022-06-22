import { Component, OnInit } from '@angular/core';
import { CountriesService } from '../../@core/services/countries.service';
import { Country } from '../../@core/interfaces/Country';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit{
  dataCountries: Country;
  error: string;

  constructor(private countriesService: CountriesService) {}

  ngOnInit(): void {
    this.getCountries();
  }

  getCountries() {
    this.countriesService.getAll().subscribe(
      (data) => {
        this.dataCountries = data.map(
          ({ name, population, capital, continents, flags, cca3 }: Country) => {
            return { 
              name, 
              population, 
              capital, 
              continents, 
              flags, 
              cca3 
            };
          }
        );
      },
      (err) => {
        this.error = err;
      }
    );
  }

  getCountriesByName(e: any) {
    const searchText: string = e.target.value;
    this.error = "";

    if(searchText){
      this.countriesService.getByName(searchText).subscribe(
        (data) => {
          this.dataCountries = data.map(
            ({ name, population, capital, continents, flags, cca3 }: Country) => {
              return { 
                name, 
                population, 
                capital, 
                continents, 
                flags, 
                cca3 
              };
            }
          );
        },
        (err) => {
          this.error = err;
        }
      );
    }
  }
}