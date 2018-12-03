import {Component, Input, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-comment',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.css']
})
export class CommentsComponent implements OnInit {
  @Input() comment;
  private comments: any;
  private postId: any;

  constructor(private http: HttpClient) { }

  ngOnInit() {
  }

  getCommentsById(id) {
    this.http.get(`https://jsonplaceholder.typicode.com/posts/${id}/comments`)
      .subscribe(data => {
        this.comments = data;
        this.postId = data[0].postId;
      });
  }

  clearComments() {
    this.comments = null;
    this.postId = null;
  }

}
