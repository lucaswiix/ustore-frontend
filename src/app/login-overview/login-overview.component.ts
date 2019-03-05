import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-login-overview',
  templateUrl: './login-overview.component.html',
  styleUrls: ['./login-overview.component.scss']
})
export class LoginOverviewComponent implements OnInit { 

  constructor(private _formBuilder: FormBuilder) { }

  ngOnInit() {
   
  }

}
