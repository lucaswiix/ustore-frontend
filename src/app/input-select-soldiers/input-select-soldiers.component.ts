import { Component, OnInit } from '@angular/core';

export interface Soldier {
  id: string;
  name: string;
}

@Component({
  selector: 'app-input-select-soldiers',
  templateUrl: './input-select-soldiers.component.html',
  styleUrls: ['./input-select-soldiers.component.scss']
})

export class InputSelectSoldiersComponent implements OnInit {

  soldiers: Soldier[] = [
    {id: '1', name: 'lucaswiix'},
    {id: '2', name: 'soldier09'},
    {id: '3', name: 'robertinhoxd'},
    {id: '4', name: 'xxtxxt'},
    {id: '5', name: 'aloalomariano'}
  ];
  constructor() { }

  ngOnInit() {
  }

}
