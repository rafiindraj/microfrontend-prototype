import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DigilistComponent } from './digilist.component';

describe('DigilistComponent', () => {
  let component: DigilistComponent;
  let fixture: ComponentFixture<DigilistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DigilistComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DigilistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
