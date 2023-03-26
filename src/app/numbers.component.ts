import { Component } from '@angular/core';

@Component({
  selector: 'numbers',
  templateUrl: './numbers.component.html',
  styleUrls: ['./feedback.component.scss'],
})
export class Numbers {
  unvisibleErrorCup: boolean = true;

  capture: number = Math.floor(Math.random() * 100000);

  checkValid(e: Event): void {
    let elemInputCap = <HTMLInputElement>e.target;
    let valueInp: number = +elemInputCap.value;
    if (valueInp != this.capture) {
      elemInputCap.style.border = '3px solid red';
      this.unvisibleErrorCup = false;
      // elemInputCap.focus();
      e.preventDefault();
      return;
    }
  }
}
