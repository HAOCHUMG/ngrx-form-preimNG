import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApplyMachineComponent } from './apply-machine.component';

describe('ApplyMachineComponent', () => {
  let component: ApplyMachineComponent;
  let fixture: ComponentFixture<ApplyMachineComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ApplyMachineComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ApplyMachineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
