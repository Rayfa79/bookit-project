import { Component } from '@angular/core';
import { Book } from '../../shared/book/book.model'

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css']
})
export class BookListComponent {
  myBooks: Book[] = [
    new Book('Book of Testing',
    'Will Wilder',
    'Mystery',
    'https://source.unsplash.com/50x50/?mystery,book'),

    new Book( 'Pet Cemetary', 'Stephen King', 'Horror',
    'https://source.unsplash.com/50x50/?mystery,book'),

    new Book( 'The Stand', 'Stephen King', 'Horror',
    'https://source.unsplash.com/50x50/?mystery,book')

 ]
}
