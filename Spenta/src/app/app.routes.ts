import { Routes } from '@angular/router';
import { MainLayoutComponent } from './layouts/main-layout/main-layout.component';
import { authGuard } from './guards/auth.guard';

export const routes: Routes = [
    {
        path: 'splash',
        loadComponent: () => import('./components/onboarding/splash-screen/splash-screen.component').then(m => m.SplashScreenComponent)
    },
    {
        path: 'onboarding',
        loadComponent: () => import('./components/onboarding/intro-slides/intro-slides.component').then(m => m.IntroSlidesComponent)
    },
    {
        path: 'login',
        loadComponent: () => import('./components/auth/login/login.component').then(m => m.LoginComponent)
    },
    {
        path: 'verify',
        loadComponent: () => import('./components/auth/verification/verification.component').then(m => m.VerificationComponent)
    },
    {
        path: 'app',
        component: MainLayoutComponent,
        canActivate: [authGuard],
        children: [
            { path: 'dashboard', loadComponent: () => import('./components/dashboard/dashboard.component').then(m => m.DashboardComponent) },
            { path: 'notifications', loadComponent: () => import('./components/dashboard/notifications/notifications.component').then(m => m.NotificationsComponent) },
            { path: 'sentinel', loadComponent: () => import('./components/sentinel/validation-request/validation-request.component').then(m => m.ValidationRequestComponent) },
            { path: 'sentinel-history', loadComponent: () => import('./components/sentinel/validation-history/validation-history.component').then(m => m.ValidationHistoryComponent) },
            { path: 'expenses', loadComponent: () => import('./components/finance/expense-categories/expense-categories.component').then(m => m.ExpenseCategoriesComponent) },
            { path: 'subscriptions', loadComponent: () => import('./components/finance/subscriptions/subscriptions.component').then(m => m.SubscriptionsComponent) },
            { path: 'savings-goals', loadComponent: () => import('./components/finance/savings-goals/savings-goals.component').then(m => m.SavingsGoalsComponent) },
            { path: 'history', loadComponent: () => import('./components/finance/full-history/full-history.component').then(m => m.FullHistoryComponent) },
            { path: 'advisor', loadComponent: () => import('./components/advisor/market-view/market-view.component').then(m => m.MarketViewComponent) },
            { path: 'chat', loadComponent: () => import('./components/advisor/ai-chat/ai-chat.component').then(m => m.AiChatComponent) },
            { path: 'profile', loadComponent: () => import('./components/profile/user-profile/user-profile.component').then(m => m.UserProfileComponent) },
            { path: 'settings', loadComponent: () => import('./components/profile/settings/settings.component').then(m => m.SettingsComponent) },
            { path: 'vault', loadComponent: () => import('./components/profile/security-vault/security-vault.component').then(m => m.SecurityVaultComponent) },
            { path: 'premium', loadComponent: () => import('./components/profile/premium-upsell/premium-upsell.component').then(m => m.PremiumUpsellComponent) },
            { path: '', redirectTo: 'dashboard', pathMatch: 'full' }
        ]
    },
    {
        path: 'scanner',
        loadComponent: () => import('./components/scanner/ticket-scanner/ticket-scanner.component').then(m => m.TicketScannerComponent)
    },
    {
        path: '',
        redirectTo: '/splash',
        pathMatch: 'full'
    },
    {
        path: '**',
        redirectTo: '/splash'
    }
];