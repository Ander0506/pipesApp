import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'canFly',
  standalone: false,
})

export class CanFlyPipe implements PipeTransform {
  transform(fly: boolean): 'vuela' | 'no vuela' {
    return fly ? 'vuela' : 'no vuela' ;
  }
}
