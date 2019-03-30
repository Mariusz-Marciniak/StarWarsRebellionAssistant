import { TestBed, async } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { WizardComponent } from './wizard/wizard.component';
import { SystemsComponent } from './systems/systems.component';
import { SelectOneComponent} from './select-one/select-one.component';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent,
        WizardComponent,
        SystemsComponent,
        SelectOneComponent
      ],
    }).compileComponents();
  }));
  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));
  it(`should have as title 'Star Wars Rebellion boardgame assistant'`, async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('Star Wars Rebellion boardgame assistant');
  }));
  it('should render title in a h1 tag', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Star Wars Rebellion boardgame assistant');
  }));
});
