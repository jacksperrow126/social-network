import { listAnimation } from './../../animation';
import { Component, OnInit, Input } from '@angular/core';
import { ArticleDetail } from 'src/app/interface/interface';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css'],
  animations: [listAnimation]
})
export class ArticleComponent implements OnInit {
  @Input() articles: ArticleDetail[];
  constructor() {}

  ngOnInit(): void {}
}
