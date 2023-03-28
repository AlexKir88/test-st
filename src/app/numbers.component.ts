import { Component } from '@angular/core';
import { ControlContainer, NgForm } from '@angular/forms';

@Component({
  selector: 'numbers',
  templateUrl: './numbers.component.html',
  styleUrls: ['./feedback.component.scss'],
  viewProviders: [{ provide: ControlContainer, useExisting: NgForm }],
})
export class Numbers {
  numbers: number | undefined;
  capture: number = Math.floor(Math.random() * 100000);
  log: any = (i: any) => {
    console.log(i);
  };
}
