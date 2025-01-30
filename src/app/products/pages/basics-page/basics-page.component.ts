import { Component } from '@angular/core';

@Component({
  selector: 'app-basics-page',
  standalone: false,

  templateUrl: './basics-page.component.html',
  styles: ``
})
export class BasicsPageComponent {

  public nameLower: string = 'anderson';
  public nameUpper: string = 'ANDERSON';
  public fullName: string = 'aNdErSon JiMeNeZ';

  public customDate: Date = new Date();

}
