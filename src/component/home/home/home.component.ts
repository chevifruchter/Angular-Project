

import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { Router, RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [MatButtonModule,RouterOutlet, RouterLink,MatButtonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})

export class HomeComponent {
  role: string | null = null;

  ngOnInit() {
    if (typeof window !== 'undefined') {
      // רק בצד לקוח
      this.role = localStorage.getItem('role');
      console.log(this.role);
    }
  }
}

