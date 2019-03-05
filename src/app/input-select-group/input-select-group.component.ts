import { Component } from '@angular/core';

export interface Grupo {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-input-select-group',
  templateUrl: './input-select-group.component.html',
  styleUrls: ['./input-select-group.component.scss']
})


export class InputSelectGroupComponent {

  grupos: Grupo[] = [
    {value: 'goblins', viewValue: 'Goblins'},
    {value: 'uruk-hais', viewValue: 'Uruk-hais'},
    {value: 'snagas', viewValue: 'Snagas '}
  ];

}
