import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmulatorScreenComponent } from './emulator-screen.component';

describe('EmulatorScreenComponent', () => {
  let component: EmulatorScreenComponent;
  let fixture: ComponentFixture<EmulatorScreenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmulatorScreenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmulatorScreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
