import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdministratorModerationComponent } from './administrator-moderation.component';

describe('AdministratorModerationComponent', () => {
  let component: AdministratorModerationComponent;
  let fixture: ComponentFixture<AdministratorModerationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdministratorModerationComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdministratorModerationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
