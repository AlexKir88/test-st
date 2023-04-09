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
  templateUrl: './app.component.html',
})
export class AppComponent {
  messageData: ObjMessage = {
    name: '',
    email: '',
    tel: '',
    theme: '',
    message: '',
  };
  setData(objMessage: ObjMessage): void {
    this.messageData = objMessage;
  }
}
