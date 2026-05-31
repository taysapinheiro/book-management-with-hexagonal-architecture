import { ApplicationConfig, provideBrowserGlobalErrorListeners, provideZonelessChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';
import { provideHttpClient } from '@angular/common/http';

import { routes } from './app.routes';
import { GetBooksUseCase } from './application/use-cases/get-books.use-case';
import { BOOK_REPOSITORY } from './infrastructure/repositories/book-repository.token';
import { IBookRepository } from './domain/ports/book.repository';
import { BookApiRepository } from './infrastructure/repositories/book-api.repository';

export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideZonelessChangeDetection(),
    provideRouter(routes),
    provideHttpClient(),
    { provide: BOOK_REPOSITORY, useClass: BookApiRepository },
    {
      provide: GetBooksUseCase,
      useFactory: (bookRepository: IBookRepository) => new GetBooksUseCase(bookRepository),
      deps: [BOOK_REPOSITORY],
    },
  ],
};
