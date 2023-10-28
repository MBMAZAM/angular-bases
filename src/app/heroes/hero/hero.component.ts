import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css']
})
export class HeroComponent {

  public name: string = 'iron Man';
  public age: number = 45;


  //Getter: Manera de crearse una propiedad, que son metodos de clase
  get capitalizacion(): string {
    return this.name.toUpperCase();
  }

  getHeroDescri(): string {

    return `${this.name} - ${this.age}`;
  }

  changeHero():void {
    this.name = 'Spiderman'
  }

  changeAge(): void {
    this.age = 25;
  }

  reset():void {
    this.name = 'iron Man'
    this.age = 45;
  }

  importante(): void {
    //TODO:
    throw 'Metodo no implementado'
  }


}
