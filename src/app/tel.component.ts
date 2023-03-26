import { Component } from '@angular/core';

@Component({
  selector: 'tel',
  templateUrl: './tel.component.html',
  styleUrls: ['./feedback.component.scss'],
})
export class Tel {
  unvisibleErrorPhone: boolean = true;

  checkValid(e: Event): void {
    let elemInputPhone = <HTMLInputElement>e.target;
    let phoneValue: string = elemInputPhone.value;
    let lengthPhone: number = phoneValue.length;
    if (lengthPhone != 17) {
      elemInputPhone.style.border = '3px solid red';
      this.unvisibleErrorPhone = false;
      //   elemInputPhone.focus();
      e.preventDefault();
      return;
    }
  }

  changePhone(e: Event): void {
    this.unvisibleErrorPhone = true;
    let inputEmail = e.target as HTMLInputElement;
    inputEmail.style.border = '0.5px solid black';
  }

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
