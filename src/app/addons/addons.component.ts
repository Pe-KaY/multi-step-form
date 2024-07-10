import { Component } from '@angular/core';

@Component({
  selector: 'app-addons',
  standalone: true,
  imports: [],
  templateUrl: './addons.component.html',
  styleUrl: './addons.component.css',
})
export class AddonsComponent {
  addonsList = [
    {
      name: 'Online service',
      description: 'Access to multiplayer games',
      price: { monthly: 1, yearly: 10 },
      checked: false,
    },
    {
      name: 'Larger storage',
      description: 'Extra 1TB of cloud save',
      price: { monthly: 2, yearly: 20 },
      checked: false,
    },
    {
      name: 'Customizable profile',
      description: 'Custom theme on your profile',
      price: { monthly: 2, yearly: 20 },
      checked: false,
    },
  ];
}
