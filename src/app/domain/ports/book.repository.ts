import { IBook } from "../entities/book";

export interface IBookRepository {
  getAllBooks(): Promise<IBook[]>;
}
