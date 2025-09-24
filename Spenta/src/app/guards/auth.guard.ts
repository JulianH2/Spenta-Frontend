import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { map, take } from 'rxjs/operators';

export const authGuard: CanActivateFn = (route, state) => {
  const authService = inject(AuthService);
  const router = inject(Router);

  return authService.isLoggedIn$.pipe(
    take(1),
    map(isLoggedIn => {
      console.log('2. AuthGuard -> Recibiendo estado de isLoggedIn:', isLoggedIn);
      
      if (isLoggedIn) {
        console.log('3. AuthGuard -> PERMITIENDO acceso.');
        return true;
      }
      
      console.log('4. AuthGuard -> DENEGANDO acceso y redirigiendo a /login.');
      router.navigate(['/login']);
      return false;
    })
  );
};