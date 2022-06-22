import { Component, Input } from '@angular/core';
import { Country } from '../../@core/interfaces/Country';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent {
  
  @Input() dataCountry: Country;

  constructor() { }
}
