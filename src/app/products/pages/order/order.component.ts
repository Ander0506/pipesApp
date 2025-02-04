import { Component } from '@angular/core';

import { Color, Hero } from '../../interfaces/hero.interface';

@Component({
  selector: 'products-order',
  standalone: false,
  templateUrl: './order.component.html',
  styles: ``
})
export class OrderComponent {

  public isUpper: boolean = false;
  public sort?: keyof Hero;

  public heroes: Hero[] = [
    {
      name: 'Superman',
      canFly: true,
      color: Color.blue
    },
    {
      name: 'Batman',
      canFly: false,
      color: Color.black
    },
    {
      name: 'Daredevil',
      canFly: false,
      color: Color.red
    },
    {
      name: 'Robin',
      canFly: false,
      color: Color.green
    },
    {
      name: 'Linterna Verde',
      canFly: true,
      color: Color.green
    },
  ]

  toggleUpperCase(): void {
    this.isUpper = !this.isUpper;
  }

  sortBy(sort: keyof Hero): void {
    this.sort = sort;
  }
}
