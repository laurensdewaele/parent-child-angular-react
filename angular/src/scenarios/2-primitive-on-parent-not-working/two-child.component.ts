import {
  Component,
  Input,
  OnChanges,
  OnInit,
  SimpleChanges
} from "@angular/core";
import { FormBuilder, FormControl, FormGroup } from "@angular/forms";

@Component({
  selector: "two-child",
  template: `
    <div>
      <form [formGroup]="formGroup">
        <input type="text" [formControl]="getInputControl()" />
      </form>
    </div>
  `
})
export class TwoChildComponent implements OnInit, OnChanges {
  @Input() set resetForm(reset: number) {
    console.log("value of reset in the @Input setter on child comp", reset);
    if (this.formGroup && reset === 1) {
      this.formGroup.reset();
    }
  }

  formGroup: FormGroup;

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit(): void {
    this.initForm();
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log("changes", changes);
  }

  private initForm(): void {
    this.formGroup = this.formBuilder.group({
      input: ["Already filled in input field"]
    });
  }

  getInputControl(): FormControl {
    if (this.formGroup) {
      return this.formGroup.get("input") as FormControl;
    }
  }
}
