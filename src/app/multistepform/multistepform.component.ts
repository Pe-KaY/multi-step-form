import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FormDataService } from '../service/form-data.service';

@Component({
  selector: 'app-multistepform',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './multistepform.component.html',
  styleUrl: './multistepform.component.css',
})
export class MultistepformComponent {
  constructor(public stepService: FormDataService) {}
}
