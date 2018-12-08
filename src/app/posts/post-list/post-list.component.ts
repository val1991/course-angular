import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.scss']
})

export class PostListComponent {
  // posts = [
  //   {title: 'First', content: 'content 1'},
  //   {title: 'Second', content: 'content 2'},
  //   {title: 'Third', content: 'content 3'}
  // ];
  @Input() posts = [];
}
