import { Component } from "@angular/core";
import { BehaviorSubject, Observable } from "rxjs";

@Component({
  selector: "four-parent",
  template: `
    <four-child [resetForm$]="resetForm$"></four-child>
    <button (click)="resetForm()">reset form</button>
  `
})
export class FourParentComponent {
  private _resetForm$: BehaviorSubject<boolean> = new BehaviorSubject(false);
  resetForm$: Observable<boolean> = this._resetForm$.asObservable();

  resetForm() {
    this._resetForm$.next(true);
  }
}
