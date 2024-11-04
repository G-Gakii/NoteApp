import { Component, OnInit } from '@angular/core';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { NoteService } from '../../../service/note.service';
import { Task } from '../../../interface/task';
import { uid } from 'uid/secure';
import { Router, RouteReuseStrategy } from '@angular/router';

@Component({
  selector: 'app-add',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './add.component.html',
  styleUrl: './add.component.scss',
})
export class AddComponent implements OnInit {
  notes!: FormGroup;
  mytask: Task[] = [];
  // notes: FormGroup = new FormGroup({
  //   title: new FormControl('', [Validators.required]),
  //   desc: new FormControl(''),
  //   category: new FormControl(''),
  // });
  constructor(private noteService: NoteService, private router: Router) {
    this.notes = noteService.notes;
  }
  ngOnInit(): void {
    this.mytask = this.noteService.getItem('notes');
  }

  AddTask() {
    console.log('add');

    if (this.notes.valid) {
      const newTask: Task = {
        id: uid(16),
        ...this.notes.value,
      };

      this.mytask.push(newTask);
      this.noteService.setItem('notes', this.mytask);
      this.router.navigate(['']);
    }
  }
  cancel() {
    this.router.navigate(['']);
  }
}
