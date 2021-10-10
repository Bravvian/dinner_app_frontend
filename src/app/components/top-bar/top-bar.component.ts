import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-top-bar',
  templateUrl: './top-bar.component.html',
  styleUrls: ['./top-bar.component.scss']
})
export class TopBarComponent implements OnInit {

  @Output() searchEvent = new EventEmitter<string>();

  searchResult: string;

  constructor() { }

  ngOnInit(): void {
  }

  triggerSearchRequest() {
    if (this.searchResult !== undefined) {
      this.searchEvent.emit(this.searchResult);
    }
  }

}
