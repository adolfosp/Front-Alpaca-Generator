import { Component } from '@angular/core';
import { Hair } from '../enums/hair.enum';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {

  public tiposHair: Array<string>;
  constructor(){
    this.tiposHair = Object.keys(Hair).filter(String);
  }
}
