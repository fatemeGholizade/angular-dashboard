import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { User } from './types';

@Component({
  selector: 'app-slider',
  imports: [CommonModule],
  templateUrl: './slider.html',
  styleUrl: './slider.scss',
})
export class Slider {
  @Input() users: User[] = [];
  @Output() userSelected = new EventEmitter<User>();


   visibleCount = 5; 
  currentIndex = 0;

  get maxIndex() {
    return Math.max(this.users.length - this.visibleCount, 0);
  }

  visibleUsers: User[] = [];

  ngOnInit() {
    this.updateVisibleUsers();
  }

  updateVisibleUsers() {
    this.visibleUsers = this.users.slice(this.currentIndex, this.currentIndex + this.visibleCount);
  }

  selectUser(user: User) {
    this.userSelected.emit(user);
  }

  prev() {
    if (this.currentIndex > 0) {
      this.currentIndex--;
      this.updateVisibleUsers();
    }
  }

  next() {
    if (this.currentIndex < this.maxIndex) {
      this.currentIndex++;
      this.updateVisibleUsers();
    }
  }
}
