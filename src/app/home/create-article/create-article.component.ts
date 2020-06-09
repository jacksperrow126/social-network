import { Component, OnInit } from '@angular/core';
import { MatChipInputEvent } from '@angular/material/chips';
import { COMMA, ENTER } from '@angular/cdk/keycodes';
import { ArticleService } from 'src/app/service/article.service';
import { ArticleToCreate } from 'src/app/interface/interface';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-create-article',
  templateUrl: './create-article.component.html',
  styleUrls: ['./create-article.component.css']
})
export class CreateArticleComponent implements OnInit {
  visible = true;
  selectable = true;
  removable = true;
  addOnBlur = true;
  readonly separatorKeysCodes: number[] = [ENTER, COMMA];
  tag: string[] = [];
  constructor(
    private articleService: ArticleService,
    private dialogRef: MatDialogRef<CreateArticleComponent>
  ) {}

  ngOnInit(): void {}

  // Add more tag
  add(event: MatChipInputEvent): void {
    const input = event.input;
    const value = event.value;

    if ((value || '').trim()) {
      this.tag.push(value.trim());
    }

    if (input) {
      input.value = '';
    }
  }

  // Remove a tag
  remove(tag: string): void {
    const index = this.tag.indexOf(tag);

    if (index >= 0) {
      this.tag.splice(index, 1);
    }
  }

  // Create article
  createArticle(form: { value: ArticleToCreate }) {
    form.value.tagList = this.tag;
    this.articleService.createArticle(form.value).subscribe(() => {
      this.dialogRef.close();
    });
  }
}
