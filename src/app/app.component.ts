import { Background } from './../enums/background.enum';
import { Component } from '@angular/core';
import { Hair } from '../enums/hair.enum';
import { AcessoriosAlpaca } from 'src/enums/acessorios-alpaca.enum';
import { Ears } from '../enums/ears.enum';
import { Type } from '@angular/compiler';
import { Accessories } from 'src/enums/accessories.enum';
import { Eyes } from '../enums/eyes.enum';
import { Leg } from '../enums/leg.enum';
import { Neck } from '../enums/neck.enum';
import { Mouth } from '../enums/mouth.enum';
const saveHtmlPng = require('save-html-as-image');

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {

  private _labels: { [key in AcessoriosAlpaca]: any } = {
    0: Hair,
    1: Ears,
    2: Eyes,
    3: Mouth,
    4: Neck,
    5: Leg,
    6: Accessories,
    7: Background
  }

  public estilos: Array<string> = [];
  public tiposAcessorios: Array<string>;

  public caminhoBackground = "";
  public caminhoHair = "";
  public caminhoEyes = "";
  public caminhoEars = "";
  public caminhoMouth = "";
  public caminhoNeck = "";
  public caminhoLeg = "";
  public caminhoAccessories = "";
  public acessorioSelecionado = "hair";


  constructor() {
    this.tiposAcessorios = this.obterChavesEnum(AcessoriosAlpaca);
    this.estilos = this.obterChavesEnum(Hair);
    this.atribuirCaminhoImagemPadrao();

  }

  private atribuirCaminhoImagemPadrao(): void {
    this.caminhoBackground = "assets/backgrounds/BLUE_50.png";
    this.caminhoAccessories = "assets/accessories/HEADPHONE.png";
    this.caminhoEars = "assets/ears/DEFAULT.png";
    this.caminhoEyes = "assets/eyes/DEFAULT.png";
    this.caminhoHair = "assets/hair/DEFAULT.png";
    this.caminhoLeg = "assets/leg/DEFAULT.png";
    this.caminhoMouth = "assets/mouth/DEFAULT.png";
    this.caminhoNeck = "assets/neck/DEFAULT.png";
  }

  private obterChavesEnum<T>(tipoEnum: T): Array<string> {
    return Object.keys(tipoEnum as Type)
      .filter((key: any) => !isNaN(Number(tipoEnum[key])));
  }

  public listarAcessorioSelecionado(tipoAcessorio: string) {
    this.acessorioSelecionado = tipoAcessorio.toLowerCase();
    let indexEnum = AcessoriosAlpaca[tipoAcessorio];
    this.estilos = this.obterChavesEnum(this._labels[indexEnum]);
  }

  public realizarDownloadImagemAlpaca(): void {
    const node = document.getElementById('imagem-print');
    saveHtmlPng.saveAsPng(node, { filename: 'Alpaca', printDate: false });
  }

  public selecionarEstilo(nomeEstilo: string): void {

    switch (this.acessorioSelecionado.toUpperCase()) {
      case this.obterStringEnum(AcessoriosAlpaca.HAIR):
        this.caminhoHair = this.obterCaminhoImagem(this.acessorioSelecionado, nomeEstilo);
        break;
      case this.obterStringEnum(AcessoriosAlpaca.BACKGROUNDS):
        this.caminhoBackground = this.obterCaminhoImagem(this.acessorioSelecionado, nomeEstilo);
        break;
      case this.obterStringEnum(AcessoriosAlpaca.EYES):
        this.caminhoEyes = this.obterCaminhoImagem(this.acessorioSelecionado, nomeEstilo);
        break;
      case this.obterStringEnum(AcessoriosAlpaca.MOUTH):
        this.caminhoMouth = this.obterCaminhoImagem(this.acessorioSelecionado, nomeEstilo);
        break;
      case this.obterStringEnum(AcessoriosAlpaca.EARS):
        this.caminhoEars = this.obterCaminhoImagem(this.acessorioSelecionado, nomeEstilo);
        break;
      case this.obterStringEnum(AcessoriosAlpaca.LEG):
        this.caminhoLeg = this.obterCaminhoImagem(this.acessorioSelecionado, nomeEstilo);
        break;
      case this.obterStringEnum(AcessoriosAlpaca.ACCESSORIES):
        this.caminhoAccessories = this.obterCaminhoImagem(this.acessorioSelecionado, nomeEstilo);
        break;
      case this.obterStringEnum(AcessoriosAlpaca.NECK):
        this.caminhoNeck = this.obterCaminhoImagem(this.acessorioSelecionado, nomeEstilo);
        break;
      default:
        return;
    }

  }

  private obterStringEnum(acessorio: AcessoriosAlpaca): string {
    return AcessoriosAlpaca[acessorio];
  }

  private obterCaminhoImagem(acessorioSelecionado: string, nomeEstilo:string): string{
    return `assets/${acessorioSelecionado}/${nomeEstilo}.png`
  }

}
