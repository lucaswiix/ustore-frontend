import { Component } from '@angular/core';
import {ViewEncapsulation } from '@angular/core';

export interface Area {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-input-select-area',
  templateUrl: './input-select-area.component.html',
  styleUrls: ['./input-select-area.component.scss'],
  encapsulation: ViewEncapsulation.None
})

export class InputSelectAreaComponent  {

  areas: Area[] = [
    {value: 'isengard', viewValue: 'Isengard'},
    {value: 'rohan', viewValue: 'Rohan'},
    {value: 'orthanc', viewValue: 'Orthanc'}
  ];

}
