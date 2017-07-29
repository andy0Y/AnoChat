import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserPelletComponent } from './user-pellet.component';

describe('UserPelletComponent', () => {
  let component: UserPelletComponent;
  let fixture: ComponentFixture<UserPelletComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserPelletComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserPelletComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
