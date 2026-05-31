import { Routes } from '@angular/router';
import { BookListComponent } from './presentation/components/book-list/book-list';
import { BooksPageComponent } from './presentation/pages/books/books';

export const routes: Routes = [
  {
    path: '',
    component: BooksPageComponent
  },
  {
    path: 'book-list',
    component: BookListComponent
  }
];
