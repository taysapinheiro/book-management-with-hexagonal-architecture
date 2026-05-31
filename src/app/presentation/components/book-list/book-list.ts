import { ChangeDetectionStrategy, Component, inject, OnInit, signal } from '@angular/core';
import { GetBooksUseCase } from '../../../application/use-cases/get-books.use-case';
import { IBook } from '../../../domain/entities/book';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-book-list',
  imports: [CommonModule],
  templateUrl:'./book-list.html',
  styleUrl: './book-list.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BookListComponent implements OnInit {
  private readonly getBooksUseCase = inject(GetBooksUseCase);
  protected readonly books = signal<IBook[]>([]);

  ngOnInit(): void {
    this.listAllBooks()
  }

  private listAllBooks(){
    this.getBooksUseCase.getAllBooks().then((books) => {
      this.books.set(books);
    });
  }

}
