import { ChangeDetectionStrategy, Component, inject, signal } from '@angular/core';
import { GetBooksUseCase } from '../../../application/use-cases/get-books.use-case';
import { IBook } from '../../../domain/entities/book';
import { Router, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-books',
  templateUrl:  './books.html',
  styleUrl: './books.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BooksPageComponent {
  private readonly router = inject(Router);

  redirectToBookList(): void {
    this.router.navigate(['book-list']);
  }
}
