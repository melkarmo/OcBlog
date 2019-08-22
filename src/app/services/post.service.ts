import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Post } from '../models/Post.model';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  posts: Post[] = [
    {
      title: "Mon premier post",
      content: "Paphius quin etiam et Cornelius senatores, ambo venenorum artibus pravis se polluisse confessi, eodem pronuntiante Maximino sunt interfecti. pari sorte etiam procurator monetae extinctus est.",
      loveIts: 0,
      created_at: new Date()
    },
    {
      title: "Mon deuxième post",
      content: "Paphius quin etiam et Cornelius senatores, ambo venenorum artibus pravis se polluisse confessi, eodem pronuntiante Maximino sunt interfecti. pari sorte etiam procurator monetae extinctus est.",
      loveIts: 0,
      created_at: new Date()
    },
    {
      title: "Encore un post",
      content: "Paphius quin etiam et Cornelius senatores, ambo venenorum artibus pravis se polluisse confessi, eodem pronuntiante Maximino sunt interfecti. pari sorte etiam procurator monetae extinctus est.",
      loveIts: 0,
      created_at: new Date()
    },
  ];
  postsSubject = new Subject<Post[]>();

  constructor() {
    this.emitPosts();
  }

  emitPosts() {
    this.postsSubject.next(this.posts);
  }

  createNewPost(newPost: Post) {
    this.posts.push(newPost);
    this.emitPosts();
  }

  like(i) {
    this.posts[i].loveIts += 1;
    this.emitPosts();
  }

  dislike(i) {
    this.posts[i].loveIts -= 1;
    this.emitPosts();
  }

}