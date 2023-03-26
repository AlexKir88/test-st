import { Component } from '@angular/core';

@Component({
  selector: 'email',
  templateUrl: './email.component.html',
  styleUrls: ['./feedback.component.scss'],
})
export class Email {
  unvisibleErrorEmail: boolean = true;

  changeEmail(e: Event): void {
    this.unvisibleErrorEmail = true;
    let inputEmail = <HTMLInputElement>e.target;
    inputEmail.style.border = '0.5px solid black';
  }

  checkValid(e: Event): void {
    const isValidEmail = (email: string): boolean => {
      const emailRE: RegExp =
        /^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/iu;
      return emailRE.test(email);
    };

    let elemInputEmail = <HTMLInputElement>e.target;
    let elemValue: string = elemInputEmail.value;
    if (!isValidEmail(elemValue)) {
      elemInputEmail.style.border = '3px solid red';
      this.unvisibleErrorEmail = false;
      // elemInputEmail.focus();
      e.preventDefault();
      return;
    }
  }
}
