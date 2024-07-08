import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MultistepformComponent } from './multistepform/multistepform.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, MultistepformComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'multi-step-form';
}
