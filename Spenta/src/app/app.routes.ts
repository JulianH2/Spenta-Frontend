import { Routes } from '@angular/router';
import { MainLayoutComponent } from './layouts/main-layout/main-layout.component';
import { AuthLayoutComponent } from './layouts/auth-layout/auth-layout.component';
import { authGuard } from './guards/auth.guard';

export const routes: Routes = [
    // --- Flujo de Autenticación (Fuera de la App principal) ---
    {
        path: '',
        component: AuthLayoutComponent,
        children: [
            { path: 'splash', loadComponent: () => import('./components/onboarding/splash-screen/splash-screen.component').then(m => m.SplashScreenComponent) },
            { path: 'onboarding', loadComponent: () => import('./components/onboarding/intro-slides/intro-slides.component').then(m => m.IntroSlidesComponent) },
            { path: 'login', loadComponent: () => import('./components/auth/login/login.component').then(m => m.LoginComponent) },
            { path: 'verify', loadComponent: () => import('./components/auth/verification/verification.component').then(m => m.VerificationComponent) },
            { path: '', redirectTo: 'splash', pathMatch: 'full' }
        ]
    },

    // --- Aplicación Principal (Después de Iniciar Sesión) ---
    {
        path: 'app',
        component: MainLayoutComponent,
        canActivate: [authGuard],
        children: [
            { path: 'dashboard', loadComponent: () => import('./components/main/dashboard/dashboard.component').then(m => m.DashboardComponent) },
            { path: 'notifications', loadComponent: () => import('./components/main/notifications/notifications.component').then(m => m.NotificationsComponent) },
            {
                path: 'sentinel',
                loadComponent: () => import('./components/sentinel/sentinel.component').then(m => m.SentinelComponent),
                children: [
                    { path: '', loadComponent: () => import('./components/sentinel/validation-request/validation-request.component').then(m => m.ValidationRequestComponent) },
                    { path: 'history', loadComponent: () => import('./components/sentinel/validation-history/validation-history.component').then(m => m.ValidationHistoryComponent) }
                ]
            },
            {
                path: 'finance',
                loadComponent: () => import('./components/finance/finance.component').then(m => m.FinanceComponent),
                children: [
                    { path: 'expenses', loadComponent: () => import('./components/finance/expense-categories/expense-categories.component').then(m => m.ExpenseCategoriesComponent) },
                    { path: 'subscriptions', loadComponent: () => import('./components/finance/subscriptions/subscriptions.component').then(m => m.SubscriptionsComponent) },
                    { path: 'savings', loadComponent: () => import('./components/finance/savings-goals/savings-goals.component').then(m => m.SavingsGoalsComponent) },
                    { path: 'history', loadComponent: () => import('./components/finance/full-history/full-history.component').then(m => m.FullHistoryComponent) },
                    { path: '', redirectTo: 'history', pathMatch: 'full' }
                ]
            },
            {
                path: 'advisor',
                loadComponent: () => import('./components/advisor/advisor.component').then(m => m.AdvisorComponent),
                children: [
                    { path: 'market', loadComponent: () => import('./components/advisor/market-view/market-view.component').then(m => m.MarketViewComponent) },
                    { path: 'chat', loadComponent: () => import('./components/advisor/ai-chat/ai-chat.component').then(m => m.AiChatComponent) },
                    { path: '', redirectTo: 'chat', pathMatch: 'full' }
                ]
            },
            {
                path: 'profile',
                loadComponent: () => import('./components/profile/profile.component').then(m => m.ProfileComponent),
                children: [
                    { path: '', loadComponent: () => import('./components/profile/user-profile/user-profile.component').then(m => m.UserProfileComponent) },
                    { path: 'settings', loadComponent: () => import('./components/profile/settings/settings.component').then(m => m.SettingsComponent) },
                    { path: 'vault', loadComponent: () => import('./components/profile/security-vault/security-vault.component').then(m => m.SecurityVaultComponent) },
                    { path: 'premium', loadComponent: () => import('./components/profile/premium-upsell/premium-upsell.component').then(m => m.PremiumUpsellComponent) }
                ]
            },
            { path: '', redirectTo: 'dashboard', pathMatch: 'full' }
        ]
    },
    {
        path: 'scanner',
        canActivate: [authGuard],
        loadComponent: () => import('./components/scanner/ticket-scanner/ticket-scanner.component').then(m => m.TicketScannerComponent)
    },
    {
        path: '**',
        redirectTo: 'splash'
    }
];