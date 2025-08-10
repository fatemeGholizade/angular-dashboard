import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DepartmentInfo } from './department-info';

describe('DepartmentInfo', () => {
  let component: DepartmentInfo;
  let fixture: ComponentFixture<DepartmentInfo>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DepartmentInfo],
    }).compileComponents();

    fixture = TestBed.createComponent(DepartmentInfo);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
