import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { SystemsComponent } from './systems/systems.component';
import { WizardComponent } from './wizard/wizard.component';
import { SelectOneComponent } from './select-one/select-one.component';
import { SidekickComponent } from './sidekick/sidekick.component';
import {RouterModule, Routes} from '@angular/router';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

const appRoutes: Routes = [
  { path: 'send-probe', component: SelectOneComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    SystemsComponent,
    WizardComponent,
    SelectOneComponent,
    SidekickComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes, { enableTracing: true }),
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
