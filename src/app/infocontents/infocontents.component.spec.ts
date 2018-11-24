import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InfocontentsComponent } from './infocontents.component';

describe('InfocontentsComponent', () => {
  let component: InfocontentsComponent;
  let fixture: ComponentFixture<InfocontentsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InfocontentsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InfocontentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
