import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import {
  faUser,
  faBagShopping,
  faPeopleGroup,
  faCalendar,
  faCommentDollar,
  faSquarePollHorizontal,
  faMessage,
  faRightFromBracket,
  faGear,
} from '@fortawesome/free-solid-svg-icons';
@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [CommonModule, RouterLink, RouterLinkActive, FontAwesomeModule],
  templateUrl: './sidebar.html',
  styleUrls: ['./sidebar.scss'],
})
export class Sidebar {
  trackById(index: number, item: { id: number }) {
    return item.id;
  }
  navMainItems = [
    { label: 'Home', route: '/home', icon: faBagShopping, id: 1 },
    { label: 'Profile', route: '/profile', icon: faPeopleGroup, id: 2 },
    { label: 'Settings', route: '/settings', icon: faCalendar, id: 3 },
    { label: 'Messages', route: '/settings', icon: faCommentDollar, id: 4 },
    { label: 'Polls', route: '/settings', icon: faSquarePollHorizontal, id: 6 },
    { label: 'Notifications', route: '/settings', icon: faMessage, id: 8 },
  ];

  navBottomItems = [
    { label: 'Logout', route: '/logout', icon: faRightFromBracket, id: 9 },
    { label: 'Settings', route: '/settings', icon: faGear, id: 10 },
  ];
}
