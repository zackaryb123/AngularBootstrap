import {Component, Input, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {
  @Input() post;
  private postId: any;
  private comments: any;

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
