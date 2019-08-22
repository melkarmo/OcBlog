import { Component, OnInit } from '@angular/core';
import { PostService } from '../services/post.service';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Post } from '../models/Post.model';

@Component({
  selector: 'app-new-post',
  templateUrl: './new-post.component.html',
  styleUrls: ['./new-post.component.sass']
})
export class NewPostComponent implements OnInit {

  postForm: FormGroup;

  constructor(private formBuilder: FormBuilder,
    private postService: PostService,
    private router: Router) { }

  ngOnInit() {
    this.initForm();
  }
  
  initForm() {
    this.postForm = this.formBuilder.group({
      titre: ['', Validators.required],
      contenu: ['', Validators.required]
    });
  }
  
  onSavePost() {
    const titre = this.postForm.get('titre').value;
    const contenu = this.postForm.get('contenu').value;
    const newPost = new Post(titre, contenu, 0, new Date());
    this.postService.createNewPost(newPost);
    this.router.navigate(['/posts']);
  }

}
