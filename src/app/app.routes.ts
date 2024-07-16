import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { ProductDetailsComponent } from './components/home/product-details/product-details.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { ProfileComponent } from './components/profile/profile.component';
import { ComponenentComponent } from './components/component.component';

export const routes: Routes = [
    {
        path: '',
        redirectTo: 'login',
        pathMatch: 'full'
    },
    {
        path: 'login',
        component: LoginComponent
    },
    {
        path: 'register',
        component: RegisterComponent
    },
    {
        path: '',
        component: ComponenentComponent,
        children: [
            {
                path: 'products',
                component: HomeComponent
            },
            {
                path: 'profile',
                component: ProfileComponent
            },
            {
                path: "product/:id",
                component: ProductDetailsComponent
            },
        ]
    }
];
