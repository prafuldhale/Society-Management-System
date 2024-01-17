import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SocietyChatGroupComponent } from './society-chat-group.component';

describe('SocietyChatGroupComponent', () => {
  let component: SocietyChatGroupComponent;
  let fixture: ComponentFixture<SocietyChatGroupComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SocietyChatGroupComponent]
    });
    fixture = TestBed.createComponent(SocietyChatGroupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
