import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { DepartmentInfo } from './components/department-info/department-info';
import { PrimaryButton } from '../../components/primary-button/primary-button';
import { Slider } from './components/slider/slider';
import { User } from './components/slider/types';

@Component({
  selector: 'app-headline',
  imports: [DepartmentInfo, CommonModule, PrimaryButton, Slider],
  templateUrl: './headline.html',
  styleUrl: './headline.scss',
})
export class Headline {
   userList: User[] = [
    { id: 1, name: 'Alice', avatarUrl: 'assets/profile1.jpg' },
    { id: 2, name: 'Bob', avatarUrl: 'assets/profile2.jpg' },
    { id: 3, name: 'Charlie', avatarUrl: 'assets/profile3.jpg' },
    { id: 4, name: 'Diana', avatarUrl: 'assets/profile4.jpg' },
    { id: 5, name: 'Diana', avatarUrl: 'assets/profile5.jpg' },
    { id: 6, name: 'Diana', avatarUrl: 'assets/profile6.jpg' },
  ];

  onUserClick(user: User) {
    console.log('User clicked:', user);
    // You can open a modal, show details, etc.
  }
}
