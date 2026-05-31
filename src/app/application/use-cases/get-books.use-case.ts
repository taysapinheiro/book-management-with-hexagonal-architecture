import { Inject } from "@angular/core";
import { IBook } from "../../domain/entities/book";
import { IBookRepository } from "../../domain/ports/book.repository";
import { BOOK_REPOSITORY } from "../../domain/ports/book-repository.token";

export class GetBooksUseCase {

  constructor(
    @Inject(BOOK_REPOSITORY)
    private readonly bookRepository: IBookRepository
  ) {}


  getAllBooks(): Promise<IBook[]> {
    return this.bookRepository.getAllBooks();
  }

}
