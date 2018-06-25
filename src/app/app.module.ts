import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { SystemsComponent } from './systems/systems.component';
import { WizardComponent } from './wizard/wizard.component';
import { SelectOneComponent } from './select-one/select-one.component';

@NgModule({
  declarations: [
    AppComponent,
    SystemsComponent,
    WizardComponent,
    SelectOneComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
