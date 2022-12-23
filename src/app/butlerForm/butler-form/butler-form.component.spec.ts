import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ButlerFormComponent } from './butler-form.component';

describe('ButlerFormComponent', () => {
  let component: ButlerFormComponent;
  let fixture: ComponentFixture<ButlerFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ButlerFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ButlerFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
