import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ManageGenresComponent } from './manage-genres.component';

describe('ManageGenresComponent', () => {
  let component: ManageGenresComponent;
  let fixture: ComponentFixture<ManageGenresComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ManageGenresComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ManageGenresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
