import { NgModule } from '@angular/core';
import { RouterModule, Routes, Router } from '@angular/router';
import { AdminGuardService } from './guards/admin-guard';
import { LoginComponent } from './login-module/login.component';
import { RegisterComponent } from './login-module/register/register.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AddBookComponent } from './dashboard/addbook/addbook.component';
import { BookedComponentComponent } from './dashboard/booked/booked.component';
import { BookDetailsComponent } from './dashboard/book-details/book-details.component';
import { AdminComponent } from './admin/admin.component';

const routes: Routes = [
    { path: '', redirectTo: '/welcome', pathMatch: 'full' },
    { path: 'login', component: LoginComponent },
    { path: 'welcome', component: WelcomeComponent },
    { path: 'register', component: RegisterComponent },
    { path: 'dashboard', component: DashboardComponent},
    { path: 'addnewbook', component: AddBookComponent },
    { path: 'booked', component: BookedComponentComponent},
    { path: 'bookDetails', component: BookDetailsComponent },
    { path: 'administration', component: AdminComponent }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
