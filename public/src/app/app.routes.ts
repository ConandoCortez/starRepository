import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { AuctionsComponent } from './auctions/auctions.component';
import { EditComponent } from './edit/edit.component';
import { NewComponent } from './new/new.component'
import { DashboardComponent } from './dashboard/dashboard.component'

const APP_ROUTES: Routes = [
    { path: '', redirectTo: '/login', pathMatch: 'full' },
    { path: 'login', component: LoginComponent },
    { path: 'home', component: AuctionsComponent },
    { path: 'dashboard', component: DashboardComponent},
    { path: 'edit/:id', component: EditComponent },
    { path: 'new', component: NewComponent }
];
export const routing = RouterModule.forRoot(APP_ROUTES);
