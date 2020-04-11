import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContentplaceComponent } from './contentplace.component';

describe('ContentplaceComponent', () => {
  let component: ContentplaceComponent;
  let fixture: ComponentFixture<ContentplaceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContentplaceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContentplaceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
