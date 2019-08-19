import { Component } from '@angular/core';
import { Post } from './models/Post.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  title = 'oc-blog';
  date = new Date();
  posts: Post[] = [
    {
      title: "Mon premier post",
      content: "Paphius quin etiam et Cornelius senatores, ambo venenorum artibus pravis se polluisse confessi, eodem pronuntiante Maximino sunt interfecti. pari sorte etiam procurator monetae extinctus est.",
      loveIts: 0,
      created_at: this.date
    },
    {
      title: "Mon deuxième post",
      content: "Paphius quin etiam et Cornelius senatores, ambo venenorum artibus pravis se polluisse confessi, eodem pronuntiante Maximino sunt interfecti. pari sorte etiam procurator monetae extinctus est.",
      loveIts: 0,
      created_at: this.date
    },
    {
      title: "Encore un post",
      content: "Paphius quin etiam et Cornelius senatores, ambo venenorum artibus pravis se polluisse confessi, eodem pronuntiante Maximino sunt interfecti. pari sorte etiam procurator monetae extinctus est.",
      loveIts: 0,
      created_at: this.date
    },
  ]

}
