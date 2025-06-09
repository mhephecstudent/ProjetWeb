import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdministratorProductsComponent } from './administrator-products.component';

describe('AdministratorProductsComponent', () => {
  let component: AdministratorProductsComponent;
  let fixture: ComponentFixture<AdministratorProductsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdministratorProductsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdministratorProductsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
