import { Background } from './../enums/background.enum';
import { Component } from '@angular/core';
import { Hair } from '../enums/hair.enum';
import { AcessoriosAlpaca } from 'src/enums/acessorios-alpaca.enum';
import { Ears } from '../enums/ears.enum';
import { Type } from '@angular/compiler';
import { Acessories } from 'src/enums/acessories.enum';
import { Eyes } from '../enums/eyes.enum';
import { Leg } from '../enums/leg.enum';
import { Neck } from '../enums/neck.enum';
import { Mouth } from '../enums/mouth.enum';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {

  public estilos: Array<string> = [];
  public tiposAcessorios: Array<string>;

  private labels:  {[key in AcessoriosAlpaca]: any} = {
    0: Hair,
    1: Ears,
    2: Eyes,
    3: Mouth,
    4: Neck,
    5: Leg,
    6: Acessories,
    7: Background
  }

  constructor(){
    this.tiposAcessorios = this.obterChavesEnum(AcessoriosAlpaca);
    this.estilos = this.obterChavesEnum(Hair);

  }

  public listarAcessorioSelecionado(tipoAcessorio: string){
    let indexEnum = AcessoriosAlpaca[tipoAcessorio];
    this.estilos = this.obterChavesEnum(this.labels[indexEnum]);

  }

  private obterChavesEnum<T>(tipoEnum: T): any{
    return Object.keys(tipoEnum as Type).filter((key: any) => !isNaN(Number(tipoEnum[key])));
  }
}
