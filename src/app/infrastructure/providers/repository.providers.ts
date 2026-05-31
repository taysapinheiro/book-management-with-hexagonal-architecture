import { Provider } from '@angular/core';
import { BOOK_REPOSITORY } from '../../domain/ports/book-repository.token';
import { BookApiRepository } from '../repositories/book-api.repository';

export const repositoryProviders: Provider[] = [
  {
    provide: BOOK_REPOSITORY,
    useClass: BookApiRepository
  }
];
