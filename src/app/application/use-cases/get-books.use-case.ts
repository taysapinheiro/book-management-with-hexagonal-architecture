import { IBook } from "../../domain/entities/book";
import { IBookRepository } from '../../domain/ports/book.repository';

export class GetBooksUseCase {
  constructor(private readonly bookRepository: IBookRepository) {}

  getAllBooks(): Promise<IBook[]> {
    return this.bookRepository.getAllBooks();
  }
}
