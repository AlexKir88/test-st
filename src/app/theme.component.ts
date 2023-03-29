import { Component, OnInit } from '@angular/core';
import { ControlContainer, NgForm } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'theme',
  templateUrl: './theme.component.html',
  styleUrls: ['./feedback.component.scss'],
  viewProviders: [{ provide: ControlContainer, useExisting: NgForm }],
})
export class Theme implements OnInit {
  themes: string[] = [];
  theme: string = 'Техподдержка';

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.http.get('http://localhost:3000/themes').subscribe({
      next: (data: any) => (this.themes = data),
    });
  }
}
