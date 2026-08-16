import { Component } from '@angular/core';
import { RouterOutlet, RouterLink, RouterLinkActive, Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { AuthService } from './auth.service';
import { AuthModule } from './auth/auth.module';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, AuthModule, RouterOutlet, RouterLink, RouterLinkActive],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  constructor(public authService: AuthService, public router: Router) {}
  logout() {
    this.authService.logout();
  }
  isLoginPage(): boolean {
    return this.router.url === '/login';
  }
}



// maskaccount.pip.ts
// funtransfer.service.ts