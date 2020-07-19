import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <app-start-page
      *ngIf="isStartPage"
      (click)="moveToChallangesPage()"
    ></app-start-page>
    <app-challanges-page *ngIf="!isStartPage"></app-challanges-page>
  `,
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  isStartPage = true;

  moveToChallangesPage(): void {
    this.isStartPage = false;
  }
}
