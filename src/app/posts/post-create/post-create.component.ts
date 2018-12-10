import { Component } from '@angular/core';

import { PostService } from '../post.service';

import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-post-crete',
  templateUrl: './post-create.component.html',
  styleUrls: ['./post-crete.component.scss']
})

export class PostCreateComponent {
  enteredTitle = '';
  enteredContent = '';

  constructor(public postService: PostService) {}

  onAddPost(form: NgForm) {
    if (form.invalid) {
      return;
    }
    this.postService.addPost(form.value.title, form.value.content);
    form.resetForm();
  }
}
