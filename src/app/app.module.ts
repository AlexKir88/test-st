import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { Feedback } from './feedback.component';
import { Name } from './name.component';
import { Email } from './email.component';
import { Tel } from './tel.component';
import { Theme } from './theme.component';
import { Message } from './message.component';
import { Numbers } from './numbers.component';

@NgModule({
  declarations: [
    AppComponent,
    Feedback,
    Name,
    Email,
    Tel,
    Theme,
    Message,
    Numbers,
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule, ReactiveFormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
