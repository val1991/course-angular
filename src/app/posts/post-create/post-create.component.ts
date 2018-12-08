import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-post-crete',
  templateUrl: './post-create.component.html',
  styleUrls: ['./post-crete.component.scss']
})

export class PostCreateComponent {
  enteredTitle = '';
  enteredContent = '';
  @Output() postCreated = new EventEmitter();

  onAddPost() {
    const post = {
      title: this.enteredTitle,
      content: this.enteredContent,
    };
    this.postCreated.emit(post);
  }
}
