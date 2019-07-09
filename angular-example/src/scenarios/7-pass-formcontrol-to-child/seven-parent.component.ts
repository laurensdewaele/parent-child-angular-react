import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup } from "@angular/forms";

@Component({
  selector: "seven-parent",
  template: `
    <seven-child [formGroup]="formGroup"></seven-child>
    <button (click)="onResetForm()">reset form</button>
  `
})
export class SevenParentComponent implements OnInit {
  formGroup: FormGroup;

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit(): void {
    this._initForm();
  }

  private _initForm(): void {
    this.formGroup = this.formBuilder.group({
      input: ["Already filled in input field"]
    });
  }

  onResetForm() {
    this.formGroup.reset();
  }
}
