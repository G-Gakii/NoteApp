import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { NoteService } from '../../../service/note.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-edit',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './edit.component.html',
  styleUrl: './edit.component.scss',
})
export class EditComponent implements OnInit {
  noteForm!: FormGroup;

  constructor(private noteservice: NoteService, private router: Router) {}
  ngOnInit(): void {
    this.noteForm = this.noteservice.notes;
    let myitem = this.noteservice.myitem();
    this.noteForm = new FormGroup({
      title: new FormControl(myitem[0].title),
      desc: new FormControl(myitem[0].description),
      category: new FormControl(myitem[0].category),
    });
  }
}
