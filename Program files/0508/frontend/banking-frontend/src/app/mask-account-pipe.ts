import { Pipe, PipeTransform } from '@angular/core';
@Pipe({
  name: 'maskAccount',
  standalone: true
})
export class MaskAccountPipe implements PipeTransform {
  transform(value: string): string {
    if (!value) {
      return '';
    }
    const last4 = value.slice(-4);
    return 'XXXXXXXXXXXX' + last4;
  }
}