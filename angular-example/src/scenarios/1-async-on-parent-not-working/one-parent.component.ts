import { Component } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'one-parent',
  template: `
    <one-child [resetForm]="resetForm$ | async"></one-child>
    <button (click)="resetForm()">reset form</button>
  `
})
export class OneParentComponent {
  resetForm$: BehaviorSubject<boolean> = new BehaviorSubject(false);

  resetForm() {
    this.resetForm$.next(true);
  }
}
