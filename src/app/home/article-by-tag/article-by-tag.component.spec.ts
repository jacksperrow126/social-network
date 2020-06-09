import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ArticleByTagComponent } from './article-by-tag.component';

describe('ArticleByTagComponent', () => {
  let component: ArticleByTagComponent;
  let fixture: ComponentFixture<ArticleByTagComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ArticleByTagComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ArticleByTagComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
