import { Component, Input } from '@angular/core';
import { ControlContainer, NgForm } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'theme',
  templateUrl: './theme.component.html',
  styleUrls: ['./feedback.component.scss'],
  viewProviders: [{ provide: ControlContainer, useExisting: NgForm }],
})
export class Theme {
  @Input() themes: object[] = [];
  theme: string = 'Техподдержка';
}
