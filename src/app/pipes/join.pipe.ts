import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'join',
})
export class JoinPipe implements PipeTransform {
  private readonly formatter = new Intl.ListFormat('en', {
    style: 'long',
    type: 'conjunction',
  });

  transform<T extends {}, K extends keyof T>(value: T[], key: K): string | void {
    if (!Array.isArray(value)) return;

    return this.formatter.format(value.map(({ [key]: k }) => String(k)));
  }
}
