import { Component } from '@angular/core';

@Component({
  selector: 'numbers',
  templateUrl: './numbers.component.html',
  styleUrls: ['./feedback.component.scss'],
})
export class Numbers {
  numbers: number | undefined;
  capture: number = Math.floor(Math.random() * 100000);
  log: any = (i: any) => {
    console.log(i);
  };
}
