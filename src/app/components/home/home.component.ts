import { Component, OnInit } from '@angular/core';
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
  mytask: Task[] = [];
  faPencil = faPencil;
  faTrash = faTrash;

  constructor(private noteservice: NoteService, private router: Router) {}
  ngOnInit(): void {
    this.mytask = this.noteservice.getItem('notes');
    console.log(this.mytask);
  }
  removeItem(index: number) {
    this.mytask.splice(index, 1);
    this.noteservice.setItem('notes', this.mytask);
  }
  EditItem(id: string) {
    let myitem = this.noteservice.getSingleItem('notes', id);
    this.noteservice.myitem.set(myitem);

    this.router.navigate(['/edit']);
  }
}
