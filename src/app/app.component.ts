import { Component } from '@angular/core';

type ObjMessage = {
  name: string;
  email: string;
  tel: string;
  theme: string;
  message: string;
};

@Component({
  selector: 'app-root',
  template: `<div class="main">
    <h3>Отправлено сообщение</h3>
    <div class="name-field">Ваше имя: {{messageData.name}}</div>
    <div class="name-field">Ваш Email: {{messageData.email}}</div>
    <div class="name-field">Ваш телефон: {{messageData.tel}}</div>
    <div class="name-field">Тема: {{messageData.theme}}</div>
    <div class="name-field">Ваше сообщение: {{messageData.message}}</div>
    <feedback [callbackFromApp]=setData />
  </div>`,
})
export class AppComponent {
  messageData: ObjMessage = {
    name: '',
    email: '',
    tel: '',
    theme: '',
    message: '',
  };
  setData: Function = async (objMessage: any) => {
    this.messageData = objMessage;
  };
}
