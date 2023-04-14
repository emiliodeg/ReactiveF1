import { Pipe, PipeTransform } from '@angular/core';
import { Driver } from '../model/driver.model';

@Pipe({
  name: 'fullName',
  pure: true
})
export class FullNamePipe implements PipeTransform {
  transform(value: Pick<Driver, 'familyName' | 'givenName'>): string {
    return `${value.givenName} ${value.familyName}`;
  }
}
