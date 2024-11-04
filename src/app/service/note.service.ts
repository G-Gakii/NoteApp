import { Injectable, signal } from '@angular/core';
import { Task } from '../interface/task';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Injectable({
  providedIn: 'root',
})
export class NoteService {
  mynotes = signal<Task[]>([]);
  myitem = signal<Task[]>([]);

  notes: FormGroup = new FormGroup({
    title: new FormControl('', [Validators.required]),
    desc: new FormControl(''),
    category: new FormControl(''),
  });
  constructor() {}

  setItem(key: string, value: Task[]) {
    localStorage.setItem(key, JSON.stringify(value));
  }
  getItem(key: string) {
    return JSON.parse(localStorage.getItem(key) || '[]');
  }
  removeTask(key: string) {
    localStorage.removeItem(key);
  }
  getSingleItem(key: string, id: string): Task[] {
    const items: Task[] = JSON.parse(localStorage.getItem(key) || '[]');
    const item = items.filter((item) => item.id === id);
    return item;
  }
}
