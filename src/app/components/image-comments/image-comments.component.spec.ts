import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImageCommentsComponent } from './image-comments.component';

describe('ImageCommentsComponent', () => {
  let component: ImageCommentsComponent;
  let fixture: ComponentFixture<ImageCommentsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ImageCommentsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ImageCommentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
