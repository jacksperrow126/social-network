import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { AuthService } from './../../../service/auth.service';
import { CommentDetail, User } from './../../../interface/interface';
import { ArticleService } from './../../../service/article.service';
import { Component, OnInit, Input, OnDestroy } from '@angular/core';
@Component({
  selector: 'app-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.css']
})
export class CommentComponent implements OnInit, OnDestroy {
  @Input() slug: string;
  listComment: CommentDetail[];
  currentUser: User;
  subcribe: Subscription;
  constructor(
    private articleService: ArticleService,
    private authService: AuthService,
    private router: Router
  ) {}

  // Get current user and comment
  ngOnInit(): void {
    this.subcribe = this.authService.currentUser.subscribe(ele => {
      this.currentUser = ele;
    });
    this.articleService.getComment(this.slug).subscribe(ele => {
      this.listComment = ele.comments;
    });
  }

  // Add comment
  comment(form: any) {
    this.articleService.addComment(form.value, this.slug).subscribe(ele => {
      this.listComment.unshift(ele.comment);
    });
  }

  // Delete comment
  delete(id: string, index: number) {
    this.articleService.deleteComment(this.slug, id).subscribe(() => {
      this.listComment.splice(index, 1);
    });
    document.querySelector('.cm' + index).classList.add('hide');
  }

  // Navigate to user
  navigateToUser(user: string) {
    this.router.navigate(['/user', user]);
  }

  ngOnDestroy() {
    this.subcribe.unsubscribe();
  }
}
