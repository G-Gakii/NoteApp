import { Component } from '@angular/core';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { NoteService } from '../../../service/note.service';
import { Task } from '../../../interface/task';
import { uid } from 'uid/secure';

@Component({
  selector: 'app-add',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './add.component.html',
  styleUrl: './add.component.scss',
})
export class AddComponent {
  notes!: FormGroup;
  // notes: FormGroup = new FormGroup({
  //   title: new FormControl('', [Validators.required]),
  //   desc: new FormControl(''),
  //   category: new FormControl(''),
  // });
  constructor(private noteService: NoteService) {
    this.notes = noteService.notes;
  }
  mytask: Task[] = [];
  AddTask() {
    console.log('add');

    if (this.notes.valid) {
      const newTask: Task = {
        id: uid(16),
        ...this.notes.value,
      };
      console.log(this.mytask);

      this.mytask.push(newTask);
      this.noteService.setItem('notes', this.mytask);
    }
  }
}
