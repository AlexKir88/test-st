import { Component } from '@angular/core';
import { Feedback } from './feedback.component';

@Component({
  selector: 'app-root',
  template: `<div class="main" >
    <h3>Отправлено сообщение</h3>
    <div class="name-field">Ваше имя:</div>
    <div class="name-field">Ваш Email:</div>
    <div class="name-field">Ваш телефон:</div>
    <div class="name-field">Тема:</div>
    <div class="name-field">Ваше сообщение:</div>
    <feedback/>
  </div>`,
})
export class AppComponent {}
