import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';
import { Component } from '@angular/core';

@Component({
  selector: 'app-about',
  template: `<p></p>`,
})
class MockAboutComponent { }

@Component({
  selector: 'app-card',
  template: `<p></p>`,
})
export class MockCardComponent { }

@Component({
  selector: 'app-card-list',
  template: `<p></p>`,
})
export class MockCardListComponent { }

@Component({
  selector: 'app-footer',
  template: `<p></p>`,
})
class MockFooterComponent { }

@Component({
  selector: 'app-header',
  template: `<p></p>`,
})
class MockHeaderComponent { }

@Component({
  selector: 'app-modal',
  template: `<p></p>`,
})
class MockModalComponent { }

@Component({
  selector: 'app-order',
  template: `<p></p>`,
})
class MockOrderComponent { }

describe('AppComponent', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports: [RouterTestingModule],
    declarations: [
      AppComponent,
      MockAboutComponent,
      MockCardComponent,
      MockCardListComponent,
      MockFooterComponent,
      MockHeaderComponent,
      MockModalComponent,
      MockOrderComponent,
    ]
  }));

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });
});
