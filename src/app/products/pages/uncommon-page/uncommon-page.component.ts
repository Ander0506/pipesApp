import { Component } from '@angular/core';
import { interval, Observable, tap } from 'rxjs';

@Component({
  selector: 'app-uncommon-page',
  standalone: false,

  templateUrl: './uncommon-page.component.html',
  styles: ``
})
export class UncommonPageComponent {

  //i18nSelect
  public name: string = 'Anderson';
  public gender: 'male'|'female' = 'male';
  public invitationMap = {
    male: 'invitarlo',
    female: 'invitarla'
  }

  changeClient = (): void => {
    this.name = 'Merlis';
    this.gender = 'female';
  };

  //i18nPlural
  public clients: string[] = ['Anderson', 'Merlis', 'Alvaro', 'Juliana', 'Anthony', 'Yolanda']
  public clientsMap = {
    '=0': 'no tenemos ningún cliente esperando.',
    '=1': 'tenemos un cliente esperando.',
    'other': 'tenemos # clientes esperando.'
  }

  deleteClient = (): void => { this.clients.shift() };

  // JsonPipe - KeyValuePipe

  public person = {
    name: 'Anderson',
    age: 37,
    address: 'Soledad, Atlántico, Colombia'
  }

   // AsyncPipe

   public myObservableTimer: Observable<number> = interval(2000).pipe(
    tap( value => console.log('tap: ', value))
  );

  public promiseValue: Promise<string> = new Promise( ( resolve, reject ) => {
    setTimeout(() => {
      resolve(' Tenemos data en la promesa');
      console.log(' Tenemos data en la promesa');
      this.person.name = 'Otro nombre';
    }, 3500)
  })

}
