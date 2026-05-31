import { InjectionToken } from '@angular/core';
import { IBookRepository } from './book.repository';

export const BOOK_REPOSITORY =
  new InjectionToken<IBookRepository>(
    'BOOK_REPOSITORY'
  );
