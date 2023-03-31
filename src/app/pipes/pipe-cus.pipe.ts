import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'pipeCus'
})
export class PipeCusPipe implements PipeTransform {

  transform(gender: number): string {
    return gender == 0 ? "Female" : (gender == 1 ? "Male" : "Other");
  }

}
