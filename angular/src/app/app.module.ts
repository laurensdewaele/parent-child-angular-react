import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { OneChildComponent } from '../scenarios/1-async-on-parent-not-working/one-child.component';
import { OneParentComponent } from '../scenarios/1-async-on-parent-not-working/one-parent.component';
import { TwoChildComponent } from "../scenarios/2-primitive-on-parent-not-working/two-child.component";
import { TwoParentComponent } from "../scenarios/2-primitive-on-parent-not-working/two-parent.component";
import { ThreeChildComponent } from '../scenarios/3-primitive-on-parent-with-timeout/three-child.component';
import { ThreeParentComponent } from '../scenarios/3-primitive-on-parent-with-timeout/three-parent.component';
import { FourChildComponent } from '../scenarios/4-subscribe-on-child/four-child.component';
import { FourParentComponent } from '../scenarios/4-subscribe-on-child/four-parent.component';
import { FiveParentComponent } from '../scenarios/5-complex-object/five-parent.component';
import { FiveChildComponent } from '../scenarios/5-complex-object/five-child.component';
import { SixChildComponent } from '../scenarios/6-viewchild/six-child.component';
import { SixParentComponent } from '../scenarios/6-viewchild/six-parent.component';


@NgModule({
  imports: [BrowserModule, FormsModule, ReactiveFormsModule],
  declarations: [
    AppComponent,
    OneChildComponent,
    OneParentComponent,
    TwoChildComponent,
    TwoParentComponent,
    ThreeChildComponent,
    ThreeParentComponent,
    FourChildComponent,
    FourParentComponent,
    FiveParentComponent,
    FiveChildComponent,
    SixChildComponent,
    SixParentComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
