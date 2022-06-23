import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserMgmtCockpitComponent } from './user-mgmt-cockpit.component';

describe('UserMgmtCockpitComponent', () => {
  let component: UserMgmtCockpitComponent;
  let fixture: ComponentFixture<UserMgmtCockpitComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserMgmtCockpitComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UserMgmtCockpitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
