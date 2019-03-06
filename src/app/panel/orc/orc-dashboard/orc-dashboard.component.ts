import { Component, OnInit } from '@angular/core';

export interface Action{
  name: string;
  message: string;
}

@Component({
  selector: 'app-orc-dashboard',
  templateUrl: './orc-dashboard.component.html',
  styleUrls: ['./orc-dashboard.component.scss']
})
export class OrcDashboardComponent implements OnInit {

  actions: Action[] = [
    {name: 'lucaswiix', message: 'Lorem ipsum teste tdasdasdasddddddddddddeste balbalbalbal'},
    {name: 'lucaswiix', message: 'Lorem ipsum teste teste balbalbalbal'},
    {name: 'lucaswiix', message: 'Lorem ipsum teste teste balbalbalbal'},
    {name: 'lucaswiix', message: 'Lorem ipsum teste teste balbalbalbal'},
    {name: 'lucaswiix', message: 'Lorem ipsum teste teste balbalbalbal'},
    {name: 'lucaswiix', message: 'Lorem ipsum teste teste balbalbalbal'},
    {name: 'lucaswiix', message: 'Lorem ipsum teste teste balbalbalbal'},
    {name: 'lucaswiix', message: 'Lorem ipsum teste teste balbalbalbal'},
    {name: 'lucaswiix', message: 'Lorem ipsum teste teste balbalbalbal'},  
  ];
  constructor() { }

  ngOnInit() {
  }

}
