import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {SystemsComponent} from './systems/systems.component';
import {WizardComponent} from './wizard/wizard.component';
import {SelectOneComponent} from './select-one/select-one.component';
import {SidekickComponent} from './sidekick/sidekick.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MapModule} from '@marciniak/map';
import {SystemSelectorComponent} from './system-selector/system-selector.component';
import {AppRoutingModule} from './app.routing.module';

@NgModule({
  declarations: [
    AppComponent,
    SystemsComponent,
    WizardComponent,
    SelectOneComponent,
    SidekickComponent,
    SystemSelectorComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MapModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
