import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SummaryPipe } from './pipes/summary.pipe';
import { BlogComponent } from './components/blog-components/blog/blog.component';
import { BlogCardComponent } from './components/blog-components/blog-card/blog-card.component';
import { BlogEditComponent } from './components/blog-components/blog-edit/blog-edit.component';
import { BlogsComponent } from './components/blog-components/blogs/blogs.component';
import { FamousBlogsComponent } from './components/blog-components/famous-blogs/famous-blogs.component';
import { CommentBoxComponent } from './components/comment-components/comment-box/comment-box.component';
import { CommentSystemComponent } from './components/comment-components/comment-system/comment-system.component';
import { CommentsComponent } from './components/comment-components/comments/comments.component';
import { DashboardComponent } from './components/comments/dashboard/dashboard.component';
import { HomeComponent } from './components/comments/home/home.component';
import { LoginComponent } from './components/comments/login/login.component';
import { NavbarComponent } from './components/comments/navbar/navbar.component';
import { NotFoundComponent } from './components/comments/not-found/not-found.component';
import { PhotoAlbumComponent } from './components/comments/photo-album/photo-album.component';
import { RegisterComponent } from './components/comments/register/register.component';

@NgModule({
  declarations: [
    AppComponent,
    SummaryPipe,
    BlogComponent,
    BlogCardComponent,
    BlogEditComponent,
    BlogsComponent,
    FamousBlogsComponent,
    CommentBoxComponent,
    CommentSystemComponent,
    CommentsComponent,
    DashboardComponent,
    HomeComponent,
    LoginComponent,
    NavbarComponent,
    NotFoundComponent,
    PhotoAlbumComponent,
    RegisterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
