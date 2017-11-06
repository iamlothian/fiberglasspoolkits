import { Pipe, PipeTransform } from '@angular/core';

@Pipe({name: 'units'})
export class UnitsPipe implements PipeTransform {

  transform(value: number, units: string): string {
    return value+''+units;
  }

}
