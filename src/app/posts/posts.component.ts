import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {
  private postId: any;
  private posts: any;
  private userId: any;

  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.getPosts();
  }

  setUserId(e) {
    this.userId = e.target.value;
  }

  getPosts() {
    this.http.get('https://jsonplaceholder.typicode.com/posts')
      .subscribe((data) => {
        this.posts = data;
      });
  }

  getPostById(e) {
    e.preventDefault();
    e.stopPropagation();
    if (this.userId) {
      this.http.get(` https://jsonplaceholder.typicode.com/posts?userId=${this.userId}`)
        .subscribe(data => {
          this.posts = data;
          this.postId = data[0].postId;
        });
    }
  }
}
