import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminOrerManagementComponent } from './admin-orer-management.component';

describe('AdminOrerManagementComponent', () => {
  let component: AdminOrerManagementComponent;
  let fixture: ComponentFixture<AdminOrerManagementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminOrerManagementComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminOrerManagementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
