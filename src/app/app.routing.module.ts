import {NgModule} from '@angular/core';
import {SystemsComponent} from './systems/systems.component';
import {RouterModule, Routes} from '@angular/router';
import {SystemSelectorComponent} from './system-selector/system-selector.component';

const appRoutes: Routes = [
  {path: '', component: SystemsComponent},
  {path: 'send-probe', component: SystemSelectorComponent},
  {path: 'send-troops', component: SystemSelectorComponent},
  {path: 'remove-troops', component: SystemSelectorComponent}
];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule {
}
