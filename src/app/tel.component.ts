import { Component } from '@angular/core';

@Component({
  selector: 'tel',
  templateUrl: './tel.component.html',
  styleUrls: ['./feedback.component.scss'],
})
export class Tel {
  tel: string = '';

  mask(e: Event): void {
    let el = e.target as HTMLInputElement;
    let matrix: string = '+7(___) ___-__-__';
    let i: number = 0;
    let def: string = matrix.replace(/\D/g, '');
    let val: string = el.value.replace(/\D/g, '');
    if (def.length >= val.length) val = def;
    el.value = matrix.replace(/./g, function (a) {
      return /[_\d]/.test(a) && i < val.length
        ? val.charAt(i++)
        : i >= val.length
        ? ''
        : a;
    });
  }
}
