import { Component } from '@angular/core';
import { ControlContainer, NgForm } from '@angular/forms';

@Component({
  selector: 'message',
  templateUrl: './message.component.html',
  styleUrls: ['./feedback.component.scss'],
  viewProviders: [{ provide: ControlContainer, useExisting: NgForm }],
})
export class Message {
  message: string = '';
}
