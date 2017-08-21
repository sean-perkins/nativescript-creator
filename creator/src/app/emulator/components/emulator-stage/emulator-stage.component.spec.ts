import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmulatorStageComponent } from './emulator-stage.component';

describe('EmulatorStageComponent', () => {
  let component: EmulatorStageComponent;
  let fixture: ComponentFixture<EmulatorStageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmulatorStageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmulatorStageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
