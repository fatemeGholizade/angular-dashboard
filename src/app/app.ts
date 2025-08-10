import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Header } from './layouts/header/header';
import { Sidebar } from './layouts/sidebar/sidebar/sidebar';
import { HttpClientModule } from '@angular/common/http';
import { Headline } from './layouts/headline/headline';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Header, Sidebar, HttpClientModule, Headline],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App {
  protected readonly title = signal('angular-dashboard');
}
