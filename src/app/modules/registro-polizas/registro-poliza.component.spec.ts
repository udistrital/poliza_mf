import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistroActasComponent } from './registro-poliza.component';

describe('RegistroPolizaComponent', () => {
  let component: RegistroActasComponent;
  let fixture: ComponentFixture<RegistroActasComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RegistroActasComponent]
    });
    fixture = TestBed.createComponent(RegistroActasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
