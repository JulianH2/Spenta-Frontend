import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../../services/auth.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  constructor(
    private authService: AuthService,
    private router: Router
  ) {}

  // 1. AÑADE "event: Event" COMO PARÁMETRO
  login(event: Event): void {
    // 2. AÑADE ESTA LÍNEA PRIMERO QUE NADA
    event.preventDefault();

    // El resto de la lógica queda igual
    this.authService.login();
    this.router.navigate(['/app/dashboard']);
  }
}