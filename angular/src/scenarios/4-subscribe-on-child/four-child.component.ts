import {
  ChangeDetectionStrategy,
  Component,
  Input,
  OnDestroy,
  OnInit
} from "@angular/core";
import { FormBuilder, FormControl, FormGroup } from "@angular/forms";
import { Observable, Subscription } from "rxjs";

@Component({
  selector: "four-child",
  template: `
    <div>
      <form [formGroup]="formGroup">
        <input type="text" [formControl]="getInputControl()" />
      </form>
    </div>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FourChildComponent implements OnInit, OnDestroy {
  @Input() resetForm$: Observable<boolean>;
  subscription = new Subscription();

  formGroup: FormGroup;

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit(): void {
    this._initForm();
    this._initSubscription();
  }

  private _initForm(): void {
    this.formGroup = this.formBuilder.group({
      input: ["Already filled in input field"]
    });
  }

  private _initSubscription(): void {
    const subscription = this.resetForm$.subscribe(reset => {
      reset && this.formGroup && this.formGroup.reset();
    });
    this.subscription.add(subscription);
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  getInputControl(): FormControl {
    if (this.formGroup) {
      return this.formGroup.get("input") as FormControl;
    }
  }
}
