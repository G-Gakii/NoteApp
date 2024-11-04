import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { NoteService } from '../../../service/note.service';
import { Router } from '@angular/router';
import { Task } from '../../../interface/task';

@Component({
  selector: 'app-edit',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './edit.component.html',
  styleUrl: './edit.component.scss',
})
export class EditComponent implements OnInit {
  noteForm!: FormGroup;
  mytask: Task[] = [];
  myitem: any;

  constructor(private noteservice: NoteService, private router: Router) {}
  ngOnInit(): void {
    this.mytask = this.noteservice.getItem('notes');
    this.noteForm = this.noteservice.notes;
    this.myitem = this.noteservice.myitem();
    this.noteForm = new FormGroup({
      title: new FormControl(this.myitem[0].title),
      desc: new FormControl(this.myitem[0].desc),
      category: new FormControl(this.myitem[0].category),
    });
  }

  updateTask() {
    if (this.noteForm.valid) {
      const updatedNote = {
        id: this.myitem[0].id,
        title: this.noteForm.get('title')?.value,
        desc: this.noteForm.get('desc')?.value,
        category: this.noteForm.get('category')?.value,
      };
      let itemIndex = this.mytask.findIndex(
        (item) => item.id === this.myitem[0].id
      );
      if (itemIndex !== -1) {
        this.mytask[itemIndex] = updatedNote;
        this.noteservice.setItem('notes', this.mytask);
      }
      this.router.navigate(['']);
    }
  }
  cancel() {
    this.router.navigate(['']);
  }
}
