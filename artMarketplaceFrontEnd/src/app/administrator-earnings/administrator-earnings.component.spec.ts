import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdministratorEarningsComponent } from './administrator-earnings.component';

describe('AdministratorEarningsComponent', () => {
  let component: AdministratorEarningsComponent;
  let fixture: ComponentFixture<AdministratorEarningsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdministratorEarningsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdministratorEarningsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
