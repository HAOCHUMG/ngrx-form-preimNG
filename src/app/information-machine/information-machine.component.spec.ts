import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InformationMachineComponent } from './information-machine.component';

describe('InformationMachineComponent', () => {
  let component: InformationMachineComponent;
  let fixture: ComponentFixture<InformationMachineComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InformationMachineComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InformationMachineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
