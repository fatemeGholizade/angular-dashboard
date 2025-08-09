import { Component, EventEmitter, Input, Output } from '@angular/core';
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
  faMagnifyingGlass,
  faSearch
} from '@fortawesome/free-solid-svg-icons';
import { FaIconComponent, FontAwesomeModule } from "@fortawesome/angular-fontawesome";
import {  faXmark } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-search-bar',
  imports: [FontAwesomeModule],
  templateUrl: './search-bar.html',
  styleUrl: './search-bar.scss',
    standalone: true,
})
export class SearchBar {
  faSearch=faSearch
 onSearch(value: any) {
    console.log('Search:', value);
  }
  @Input() placeholder = 'Search';
  @Input() searchItem = '';
  @Output() handleSearch = new EventEmitter<string>();
  @Output() rightIconClick = new EventEmitter<void>();

  onInputChange(value: string) {
    this.searchItem = value;
    this.handleSearch.emit(value);
  }
}
