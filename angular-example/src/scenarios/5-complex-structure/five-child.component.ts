import {
  ChangeDetectionStrategy,
  Component,
  Input,
  OnInit
} from "@angular/core";
import { FormBuilder, FormControl, FormGroup } from "@angular/forms";

@Component({
  selector: "five-child",
  template: `
    <div>
      <form [formGroup]="formGroup">
        <input type="text" [formControl]="getInputControl()" />
      </form>
    </div>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FiveChildComponent implements OnInit {
  formGroup: FormGroup;

  @Input() set resetForm({ reset }) {
    reset && this.formGroup.reset();
  }

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit(): void {
    this._initForm();
  }

  private _initForm(): void {
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
