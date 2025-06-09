import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AdministratorComponent } from './administrators.component';

describe('AdministratorsComponent', () => {
  let component: AdministratorComponent;
  let fixture: ComponentFixture<AdministratorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdministratorComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdministratorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
