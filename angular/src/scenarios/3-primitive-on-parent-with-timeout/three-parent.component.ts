import { Component } from '@angular/core';

@Component({
  selector: 'three-parent',
  template: `
    <three-child [resetForm]="resetForm"></three-child>
    <button (click)="onResetForm()">reset form</button>
  `
})
export class ThreeParentComponent {
  resetForm: boolean = false;

  constructor() {}

  onResetForm() {
    this.resetForm = true;
    setTimeout(() => (this.resetForm = false), 0);
  }
}
