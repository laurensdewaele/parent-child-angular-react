import { Component } from "@angular/core";

export interface ResetForm {
  reset: boolean;
}

@Component({
  selector: "five-parent",
  template: `
    <five-child [resetForm]="resetForm"></five-child>
    <button (click)="onResetForm()">reset form</button>
  `
})
export class FiveParentComponent {
  resetForm: ResetForm = { reset: false };

  onResetForm() {
    // Does not get triggered when mutating value
    // this.resetForm.reset = true;
    // console.log(this.resetForm);

    const newResetFormObject: ResetForm = { reset: true };
    this.resetForm = newResetFormObject;
  }
}
