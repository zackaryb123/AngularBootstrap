import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { UsersComponent } from './users/users.component';
import { PostsComponent } from './posts/posts.component';
import { MenueHeaderComponent } from './menue-header/menue-header.component';
import { UserComponent } from './users/user/user.component';
import { HttpClientModule } from '@angular/common/http';
import { CommentsComponent } from './posts/comment/comments.component';
import { PostComponent } from './posts/post/post.component';

@NgModule({
  declarations: [
    AppComponent,
    UsersComponent,
    PostsComponent,
    MenueHeaderComponent,
    UserComponent,
    CommentsComponent,
    PostComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgbModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
