import { Component, effect, OnInit } from '@angular/core';
import { Task } from '../../interface/task';
import { NoteService } from '../../service/note.service';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faPencil, faTrash } from '@fortawesome/free-solid-svg-icons';
import { CommonModule } from '@angular/common';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [FontAwesomeModule, CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent implements OnInit {
  myNotes: Task[] = [];
  faPencil = faPencil;
  faTrash = faTrash;

  constructor(private noteservice: NoteService, private router: Router) {
    effect(() => {
      this.myNotes = noteservice.mynotes();
    });
  }
  ngOnInit(): void {
    this.noteservice.mynotes.set(this.noteservice.getItem('notes'));
    // this.myNotes = this.noteservice.mynotes();
  }
  removeItem(index: number) {
    this.myNotes.splice(index, 1);

    this.noteservice.setItem('notes', this.myNotes);
  }
  EditItem(id: string) {
    let myitem = this.noteservice.getSingleItem('notes', id);
    this.noteservice.myitem.set(myitem);

    this.router.navigate(['/edit']);
  }
  allItems() {
    // this.myNotes = this.noteservice.getItem('notes') || [];
    this.noteservice.mynotes.set(this.noteservice.getItem('notes') || []);
  }
  personalItems() {
    this.myNotes = this.noteservice.getItem('notes');
    let personNotes: Task[] = this.myNotes.filter(
      (notes) => notes.category === 'PERSONAL'
    );
    this.noteservice.mynotes.set(personNotes);
    // this.myNotes = personNotes;
  }
  workItems() {
    this.myNotes = this.noteservice.getItem('notes');
    let workNotes: Task[] = this.myNotes.filter(
      (notes) => notes.category === 'WORK'
    );
    this.noteservice.mynotes.set(workNotes);
    // this.myNotes = workNotes;
  }
  bussinessItems() {
    this.myNotes = this.noteservice.getItem('notes');
    let businessNotes: Task[] = this.myNotes.filter(
      (notes) => notes.category === 'BUSINESS'
    );
    this.noteservice.mynotes.set(businessNotes);
    // this.myNotes = businessNotes;
  }
}
