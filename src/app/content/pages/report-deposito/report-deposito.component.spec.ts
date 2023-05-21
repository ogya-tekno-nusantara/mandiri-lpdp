import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReportDepositoComponent } from './report-deposito.component';

describe('ReportDepositoComponent', () => {
  let component: ReportDepositoComponent;
  let fixture: ComponentFixture<ReportDepositoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReportDepositoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReportDepositoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
