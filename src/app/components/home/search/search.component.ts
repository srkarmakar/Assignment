import { Component, EventEmitter, Output } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { FormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-search',
  standalone: true,
  imports: [MatFormFieldModule, MatInputModule, FormsModule, MatButtonModule, MatIconModule, RouterLink],
  templateUrl: './search.component.html',
  styleUrl: './search.component.scss'
})
export class SearchComponent {
  @Output() searchData = new EventEmitter<string>();
  value?: string;

  searchOnFocusOut(event: any) {    
    this.value = event.target.value;
    //console.log("On Focus Out Event", event.target.value);
    this.searchData.emit(this.value)
  }
  searchOnTyping(event: any) {
    //console.log("On Typing Event", event.target.value);
    this.searchData.emit(this.value)
  }
  searchOnClick() {
    console.log("On Click Event");
    this.searchData.emit(this.value)
  }
}
