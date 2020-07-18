import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InjectedComponent } from './injected.component';

describe('InjectedComponent', () => {
  let component: InjectedComponent;
  let fixture: ComponentFixture<InjectedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InjectedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InjectedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
