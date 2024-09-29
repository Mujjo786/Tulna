import { ComponentFixture, TestBed } from '@angular/core/testing';

import { YoutubePageComponent } from './youtube-page.component';

describe('YoutubePageComponent', () => {
  let component: YoutubePageComponent;
  let fixture: ComponentFixture<YoutubePageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [YoutubePageComponent]
    });
    fixture = TestBed.createComponent(YoutubePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
