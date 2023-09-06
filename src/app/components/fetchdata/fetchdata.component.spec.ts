import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FetchdataComponent } from './fetchdata.component';

describe('FetchdataComponent', () => {
  let component: FetchdataComponent;
  let fixture: ComponentFixture<FetchdataComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FetchdataComponent]
    });
    fixture = TestBed.createComponent(FetchdataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
