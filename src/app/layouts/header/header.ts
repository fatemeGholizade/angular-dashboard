import { Component } from '@angular/core';
import { Weather } from "./components/weather/weather";
import { SearchBar } from "./components/search-bar/search-bar";
import { ProfileCard } from "./components/profile-card/profile-card";
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [Weather, SearchBar, ProfileCard, CommonModule],
  templateUrl: './header.html',
  styleUrl: './header.scss',
})
export class Header {}
