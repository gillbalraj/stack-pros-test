import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KingInfoComponent } from './king-info.component';

describe('KingInfoComponent', () => {
  let component: KingInfoComponent;
  let fixture: ComponentFixture<KingInfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KingInfoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KingInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
