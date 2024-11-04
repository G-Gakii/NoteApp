import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { Task } from '../../../interface/task';
import { NoteService } from '../../../service/note.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-search',
  standalone: true,
  imports: [FontAwesomeModule, RouterLink, FormsModule],
  templateUrl: './search.component.html',
  styleUrl: './search.component.scss',
})
export class SearchComponent implements OnInit {
  faMagnifyingGlass = faMagnifyingGlass;
  notes: Task[] = [];
  searchItem: string = '';
  constructor(private noteservice: NoteService) {}
  ngOnInit(): void {
    this.notes = this.noteservice.getItem('notes');
  }
  searchedItem() {
    if (this.searchItem) {
      let mynotes = this.notes.filter((note) =>
        note.title.includes(this.searchItem)
      );
      this.noteservice.mynotes.set(mynotes);

      console.log(mynotes);
    } else {
      console.log('no item');
    }
  }
}
