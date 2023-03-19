import { Component } from '@angular/core';

@Component({
  selector: 'feedback',
  template: ` <div class="background">
    <div class="feedback-window">
      <form (submit)="checkValidFields($event)">
        <div>
          <div class="parent-red-line">
            <div class="red-line">
              <h1>Напишите нам</h1>
            </div>
            <div class="triangle"></div>
          </div>
        </div>
        <div class="name-field">Ваше имя:</div>
        <div class="input-field">
          <img class="icon" src="/assets/images/contact.png" alt="contact" />
          <input type="text" />
        </div>
        <br />
        <div class="name-field">Ваш Email:</div>
        <div class="input-field">
          <img class="icon" src="/assets/images/mail.png" alt="contact" />
          <input type="text" name="email" (change)="changeEmail($event)" />
          <div [hidden]="unvisibleErrorEmail" class="error">
            некорректный email
          </div>
        </div>
        <br />
        <div class="name-field">Ваш телефон:</div>
        <div class="input-field">
          <img class="icon" src="/assets/images/phone.png" alt="contact" />
          <input
            name="phone"
            type="text"
            value="+7"
            (change)="changePhone($event)"
            (input)="mask($event)"
            (blur)="mask($event)"
          />
          <div [hidden]="unvisibleErrorPhone" class="error">
            некорректный номер
          </div>
        </div>
        <br />
        <div class="name-field">Тема:</div>
        <div class="input-field">
          <select>
            <option>Техподдержка</option>
            <option>Продажи</option>
            <option>Другое</option>
            <option>Еще один пункт</option></select
          ><br />
        </div>
        <br />
        <div class="name-field">Ваше сообщение:</div>
        <div class="input-field">
          <textarea></textarea>
        </div>
        <br />
        <div class="name-field">Цифры:</div>
        <div class="check-field">
          <input type="number" name="check" />
          <div [hidden]="unvisibleErrorCup" class="error">
            некорректный номер
          </div>
          <div class="check-numb">
            <div class="vline"></div>
            <div class="vline second"></div>
            <div class="hline"></div>
            <div class="numb">{{ capture }}</div>
          </div>
        </div>
        <div class="cont-button">
          <button type="submit">Отправить письмо!</button>
        </div>
      </form>
    </div>
  </div>`,
  styleUrls: ['./feedback.component.scss'],
})
export class Feedback {
  unvisibleErrorEmail: boolean = true;
  unvisibleErrorPhone: boolean = true;
  unvisibleErrorCup: boolean = true;
  capture: number = Math.floor(Math.random() * 100000);

  checkValidFields(e: SubmitEvent) {
    let elemForm = e.currentTarget as HTMLFormElement;
    let elems = elemForm.elements as HTMLFormControlsCollection;
    let elemInputEmail = elems[<any>'email'] as HTMLInputElement;
    let elemInputPhone = elems[<any>'phone'] as HTMLInputElement;
    let elemInputCap = elems[<any>'check'] as HTMLInputElement;

    if (!isValidEmail(elemInputEmail.value)) {
      elemInputEmail.style.border = '3px solid red';
      this.unvisibleErrorEmail = false;
      elemInputEmail.focus();
      e.preventDefault();
      return;
    }

    if (!isValidTel(elemInputPhone.value)) {
      elemInputPhone.style.border = '3px solid red';
      this.unvisibleErrorPhone = false;
      elemInputPhone.focus();
      e.preventDefault();
      return;
    }

    if (!isValidCap(+elemInputCap.value, this.capture)) {
      elemInputCap.style.border = '3px solid red';
      this.unvisibleErrorCup = false;
      elemInputCap.focus();
      e.preventDefault();
      return;
    }
  }

  changeEmail(e: Event) {
    this.unvisibleErrorEmail = true;
    let inputEmail = e.target as HTMLInputElement;
    inputEmail.style.border = '0.5px solid black';
  }

  changePhone(e: Event) {
    this.unvisibleErrorPhone = true;
    let inputEmail = e.target as HTMLInputElement;
    inputEmail.style.border = '0.5px solid black';
  }

  mask(e: Event) {
    let el = e.target as HTMLInputElement;
    let matrix: string = '+7(___) ___-__-__';
    let i: number = 0;
    let def: string = matrix.replace(/\D/g, '');
    let val: string = el.value.replace(/\D/g, '');
    if (def.length >= val.length) val = def;
    el.value = matrix.replace(/./g, function (a) {
      return /[_\d]/.test(a) && i < val.length
        ? val.charAt(i++)
        : i >= val.length
        ? ''
        : a;
    });
  }
}

const isValidEmail = (email: string) => {
  const emailRE: RegExp =
    /^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/iu;
  return emailRE.test(email);
};

const isValidTel = (tel: string) => {
  return tel.length === 17;
};

const isValidCap = (numbs: number, createNum: number) => {
  return numbs === createNum;
};
