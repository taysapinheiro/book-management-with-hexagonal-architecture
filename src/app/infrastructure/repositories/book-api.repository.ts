import { HttpClient } from "@angular/common/http";
import { inject, Injectable } from "@angular/core";
import { IBookRepository } from '../../domain/ports/book.repository';
import { IBook } from "../../domain/entities/book";
import { firstValueFrom, map, Observable } from "rxjs";

const API_URL = 'http://localhost:3000/books';

@Injectable()
export class BookApiRepository implements IBookRepository {
  private readonly http = inject(HttpClient);

  async getAllBooks(): Promise<IBook[]> {
    return await firstValueFrom(
      this.http.get<IBook[]>(API_URL)
    );
  }
}
