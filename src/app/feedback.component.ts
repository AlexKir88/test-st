import { Component, Input, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { sendMessage } from './request';

@Component({
  selector: 'feedback',
  templateUrl: './feedback.component.html',
  styleUrls: ['./feedback.component.scss'],
})
export class Feedback {
  @Output() callbackFromApp = new EventEmitter<object>();
  defineObject(objMessage: any): void {
    this.callbackFromApp.emit(objMessage);
  }

  unVisibleComponent: boolean = false;
  unvisibleErrorSend: boolean = true;

  makeUnvisible(): void {
    this.unVisibleComponent = true;
  }

  checkValidFields(e: SubmitEvent) {
    e.preventDefault();

    let formFeedback = <HTMLFormElement>e.target;
    sendMessage(
      {
        name: formFeedback['nameUser'].value,
        email: formFeedback['email'].value,
        tel: formFeedback['phone'].value,
        theme: formFeedback['theme'].value,
        message: formFeedback['message'].value,
        date: new Date().toLocaleString('ru'),
        idContact: this.codeString(
          formFeedback['email'].value + formFeedback['phone'].value
        ),
      },
      this.defineObject.bind(this),
      () => this.makeUnvisible()
    );

    setTimeout(() => (this.unvisibleErrorSend = false), 3000);
  }

  codeString(str: string): string {
    const strNoSpace: string = str.trim();
    let result: string = '';
    for (let i of strNoSpace) {
      result = result + i.codePointAt(0);
    }
    return Number(result).toString(36).slice(0, 12);
  }
}
