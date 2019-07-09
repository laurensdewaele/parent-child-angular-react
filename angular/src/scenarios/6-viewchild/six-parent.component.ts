import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { SixChildComponent } from './six-child.component';

@Component({
  selector: 'six-parent',
  template: `
    <six-child></six-child>
    <button (click)="onResetForm()">reset form</button>
  `
})
export class SixParentComponent implements AfterViewInit {
  @ViewChild(SixChildComponent, { static: false })
  fiveChildComponent: SixChildComponent;

  ngAfterViewInit(): void {
    console.log(this.fiveChildComponent);
  }

  onResetForm() {
    this.fiveChildComponent.formGroup.reset();
  }
}
