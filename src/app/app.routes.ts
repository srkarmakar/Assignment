import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { ProductDetailsComponent } from './components/home/product-details/product-details.component';
import { LoginComponent } from './components/login/login.component';

export const routes: Routes = [
    {
        path:"",
        component:LoginComponent
    },
    {
        path:"products",
        component:HomeComponent
    },
    {
        path:"product/:id",
        component:ProductDetailsComponent
    }
];
