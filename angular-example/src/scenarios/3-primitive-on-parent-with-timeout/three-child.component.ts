import {
  ChangeDetectionStrategy,
  Component,
  Input,
  OnInit
} from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'three-child',
  template: `
    <div>
      <form [formGroup]="formGroup">
        <input type="text" [formControl]="getInputControl()" />
      </form>
    </div>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ThreeChildComponent implements OnInit {
  @Input() set resetForm(reset: boolean) {
    if (this.formGroup && reset) {
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
      input: ['Already filled in input field']
    });
  }

  getInputControl(): FormControl {
    if (this.formGroup) {
      return this.formGroup.get('input') as FormControl;
    }
  }
}
