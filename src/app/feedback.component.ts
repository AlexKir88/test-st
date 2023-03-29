import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import { ControlContainer, NgForm } from '@angular/forms';
import { FormGroup } from '@angular/forms';
import { HttpService } from './http.service';

@Component({
  selector: 'feedback',
  templateUrl: './feedback.component.html',
  styleUrls: ['./feedback.component.scss'],
  providers: [HttpService],
})
export class Feedback {
  disabledButton: boolean = false;
  formValid: boolean = true;
  formSubmitted: boolean = false;
  errorSend: boolean = false;

  @Output() callbackFromApp = new EventEmitter<object>();
  defineObject(objMessage: any): void {
    this.callbackFromApp.emit(objMessage);
  }

  makeUnvisible(): void {
    this.formSubmitted = true;
  }

  constructor(private httpService: HttpService) {}

  sabmitData(form: FormGroup) {
    if (form.status == 'INVALID') {
      this.formValid = false;
      setTimeout(() => (this.formValid = true), 5000);
      return;
    }
    this.formValid = true;
    let formValue = form.value;
    let dataForSend: object = {
      name: formValue['nameUser'],
      email: formValue['email'],
      tel: formValue['phone'],
      theme: formValue['theme'],
      message: formValue['message'],
      date: new Date().toLocaleString('ru'),
      idContact: this.codeString(formValue['email'] + formValue['phone']),
    };

    this.httpService.postData(dataForSend, this.defineObject.bind(this), () =>
      this.makeUnvisible()
    );

    setTimeout(() => (this.errorSend = true), 5000);
    this.disabledButton = true;
    setTimeout(() => (this.disabledButton = false), 7000);
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
