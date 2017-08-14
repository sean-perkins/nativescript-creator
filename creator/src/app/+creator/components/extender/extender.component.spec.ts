import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExtenderComponent } from './extender.component';

describe('ExtenderComponent', () => {
  let component: ExtenderComponent;
  let fixture: ComponentFixture<ExtenderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExtenderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExtenderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
