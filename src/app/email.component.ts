import { Component } from '@angular/core';
import { NgModel } from '@angular/forms';

@Component({
  selector: 'email',
  templateUrl: './email.component.html',
  styleUrls: ['./feedback.component.scss'],
})
export class Email {
  email: string = '';
  emailPattern: string = '[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,4}$';
}
