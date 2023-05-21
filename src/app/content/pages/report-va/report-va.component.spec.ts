import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReportVaComponent } from './report-va.component';

describe('ReportVaComponent', () => {
  let component: ReportVaComponent;
  let fixture: ComponentFixture<ReportVaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReportVaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReportVaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
