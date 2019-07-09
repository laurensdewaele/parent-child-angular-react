import {
  Component,
  Input,
  OnInit,
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
export class TwoChildComponent implements OnInit {
  @Input() set resetForm(reset: number) {
    if (this.formGroup && reset === 1) {
      this.formGroup.reset();
    }
  }

  formGroup: FormGroup;

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit(): void {
    this.initForm();
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
