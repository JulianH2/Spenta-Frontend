import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private loggedIn = new BehaviorSubject<boolean>(false);
  isLoggedIn$ = this.loggedIn.asObservable();

  // Quitamos el Router de aquí porque ya no lo necesita
  constructor() {
    console.log('AuthService Creado / Instanciado');
  }

  login(): void {
    console.log('1. AuthService -> login() llamado. Cambiando estado a TRUE.');
    this.loggedIn.next(true);
    // ¡LA LÍNEA DE NAVEGACIÓN SE ELIMINA DE AQUÍ!
  }

  logout(): void {
    this.loggedIn.next(false);
    // Para el logout sí podemos dejar la navegación aquí, aunque lo ideal sería moverla también.
    // Por ahora, para arreglar el problema principal, lo dejamos.
  }
}