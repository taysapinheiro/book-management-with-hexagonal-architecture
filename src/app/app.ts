import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { BooksPageComponent } from "./presentation/pages/books/books";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, BooksPageComponent],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('hexagonal_architecture');
}
