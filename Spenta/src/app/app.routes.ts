import { Routes } from '@angular/router';
import { MainLayoutComponent } from './layouts/main-layout/main-layout.component';

export const routes: Routes = [
    { path: '', redirectTo: 'app/dashboard', pathMatch: 'full' },
    {
        path: 'app',
        component: MainLayoutComponent,
        children: [
            { path: 'dashboard', loadComponent: () => import('./components/dashboard/dashboard.component').then(m => m.DashboardComponent) }, // Placeholder para pantalla 1-9
            { path: 'subscriptions', loadComponent: () => import('./components/subscriptions/subscriptions.component').then(m => m.SubscriptionsComponent) },
            { path: 'savings-goals', loadComponent: () => import('./components/savings-goals/savings-goals.component').then(m => m.SavingsGoalsComponent) },
            { path: 'history', loadComponent: () => import('./components/history/history.component').then(m => m.HistoryComponent) },
            { path: 'advisor', loadComponent: () => import('./components/market-view/market-view.component').then(m => m.MarketViewComponent) },
            { path: 'chat', loadComponent: () => import('./components/ai-chat/ai-chat.component').then(m => m.AiChatComponent) },
            { path: 'profile', loadComponent: () => import('./components/profile/profile.component').then(m => m.ProfileComponent) },
            { path: 'settings', loadComponent: () => import('./components/settings/settings.component').then(m => m.SettingsComponent) },
            { path: 'vault', loadComponent: () => import('./components/security-vault/security-vault.component').then(m => m.SecurityVaultComponent) },
            { path: 'premium', loadComponent: () => import('./components/premium-upsell/premium-upsell.component').then(m => m.PremiumUpsellComponent) },
        ]
    },
    { path: 'scanner', loadComponent: () => import('./components/ticket-scanner/ticket-scanner.component').then(m => m.TicketScannerComponent) },
    { path: '**', redirectTo: 'app/dashboard' }
];