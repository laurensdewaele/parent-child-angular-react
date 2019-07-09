import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'seven-child',
  template: `
    <div>
      <form [formGroup]="formGroup">
        <input type="text" [formControl]="getInputControl()" />
      </form>
    </div>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SevenChildComponent {
  @Input() formGroup: FormGroup;

  getInputControl(): FormControl {
    if (this.formGroup) {
      return this.formGroup.get('input') as FormControl;
    }
  }
}
