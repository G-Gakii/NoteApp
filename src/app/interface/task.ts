export interface Task {
  id: string;
  category: 'PERSONAL' | 'WORK' | 'BUSINESS';
  title: string;
  description?: string;
}