import { Component } from '@angular/core';
import { PersonalinfoComponent } from '../personalinfo/personalinfo.component';

@Component({
  selector: 'app-multistepform',
  standalone: true,
  imports: [ PersonalinfoComponent],
  templateUrl: './multistepform.component.html',
  styleUrl: './multistepform.component.css'
})
export class MultistepformComponent {

}
