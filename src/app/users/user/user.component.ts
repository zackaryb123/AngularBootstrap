import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  @Input() user;
  private userPosts: any;
  private userId: any;

  // @Output() sendMessage = new EventEmitter<string>();

  constructor(private http: HttpClient) { }

  ngOnInit() {
  }

  getPostById(id) {
    this.http.get(`https://jsonplaceholder.typicode.com/users/${id}/posts`)
      .subscribe(posts => {
        this.userPosts = posts;
        this.userId = posts[0].userId;
      });
  }

  clearPostById(id) {
    this.userPosts = null;
    this.userId = null;
  }
}
