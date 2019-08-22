import { Component, OnInit, Input } from '@angular/core';
import { Post } from '../models/Post.model';
import { PostService } from '../services/post.service';

@Component({
  selector: 'app-post-list-item',
  templateUrl: './post-list-item.component.html',
  styleUrls: ['./post-list-item.component.sass']
})
export class PostListItemComponent implements OnInit {

  @Input() post: Post;
  @Input() index: number;

  constructor(private postService: PostService) { }

  ngOnInit() {
  }

  like() {
    this.postService.like(this.index);
  }

  dislike() {
    this.postService.dislike(this.index);
  }

  delete(){
    this.postService.deletePost(this.index);
  }

}
