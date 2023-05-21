import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardVaComponent } from './dashboard-va.component';

describe('DashboardVaComponent', () => {
  let component: DashboardVaComponent;
  let fixture: ComponentFixture<DashboardVaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DashboardVaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardVaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
