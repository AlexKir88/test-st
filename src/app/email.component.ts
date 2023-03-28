import { Component } from '@angular/core';
import { ControlContainer, NgForm } from '@angular/forms';

@Component({
  selector: 'email',
  templateUrl: './email.component.html',
  styleUrls: ['./feedback.component.scss'],
  viewProviders: [{ provide: ControlContainer, useExisting: NgForm }],
})
export class Email {
  email: string = '';
  emailPattern: string = '[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,4}$';
}
