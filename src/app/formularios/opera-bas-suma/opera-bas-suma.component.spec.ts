import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OperaBasSumaComponent } from './opera-bas-suma.component';

describe('OperaBasSumaComponent', () => {
  let component: OperaBasSumaComponent;
  let fixture: ComponentFixture<OperaBasSumaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [OperaBasSumaComponent]
    });
    fixture = TestBed.createComponent(OperaBasSumaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
