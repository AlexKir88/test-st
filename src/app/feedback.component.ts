import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import { ControlContainer, NgForm } from '@angular/forms';
import { FormGroup } from '@angular/forms';
import { HttpService } from './http.service';
import { HttpClient } from '@angular/common/http';
import * as e from 'express';

@Component({
  selector: 'feedback',
  templateUrl: './feedback.component.html',
  styleUrls: ['./feedback.component.scss'],
  providers: [HttpService],
})
export class Feedback implements OnInit {
  themes: object[] | undefined;

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

  constructor(private httpService: HttpService, private http: HttpClient) {}

  ngOnInit() {
    this.httpService.getThemes((themes: object[]) => (this.themes = themes));
  }

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
    };

    this.httpService.postData(dataForSend, this.defineObject.bind(this), () =>
      this.makeUnvisible()
    );
    this.disabledButton = true;
  }
}
