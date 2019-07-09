import { Component } from "@angular/core";

@Component({
  selector: "two-parent",
  template: `
    <two-child [resetForm]="resetForm"></two-child>
    <button (click)="onResetForm()">reset form</button>
  `
})
export class TwoParentComponent {
  resetForm = false;

  onResetForm() {
    this.resetForm = true;
  }
}
