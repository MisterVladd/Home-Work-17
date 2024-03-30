import { Component } from '@angular/core';

@Component({
  selector: 'app-home-tasks',
  templateUrl: './home-tasks.component.html',
  styleUrl: './home-tasks.component.scss'
})
export class HomeTasksComponent {
  public news = [
    {
      id: Date.now(),
      title: 'Daily astromeditation',
      numer: '3',
    },
    {
      id: Date.now(),
      title: 'Daily sleep astromeditation',
      numer: '1',
    },
    {
      id: Date.now(),
      title: 'Daily mantra',
      numer: '2',
    }
  ]
}
