import { Component } from '@angular/core';
import { Book } from '../../shared/book/book.model'

@Component({
  selector: 'app-book-results',
  templateUrl: './book-results.component.html',
  styleUrls: ['./book-results.component.css']
})
export class BookResultsComponent {
  allBooks: Book[] = [
    new Book('To Kill a MockingiBird', 'Mya Angelou', 'Fiction',
    'https://source.unsplash.com/50x50/?mystery,book'),

    new Book('To Kill a MockingiBird', 'Mya Angelou', 'Fiction',
    'https://source.unsplash.com/50x50/?mystery,book'),

    new Book('To Kill a MockingiBird', 'Mya Angelou', 'Fiction',
    'https://source.unsplash.com/50x50/?mystery,book')
  ]

}
