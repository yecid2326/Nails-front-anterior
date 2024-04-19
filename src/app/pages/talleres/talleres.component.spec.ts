import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TalleresComponent } from './talleres.component';

describe('TalleresComponent', () => {
  let component: TalleresComponent;
  let fixture: ComponentFixture<TalleresComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TalleresComponent]
    });
    fixture = TestBed.createComponent(TalleresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
