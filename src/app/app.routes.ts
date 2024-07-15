import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { ProductDetailsComponent } from './components/home/product-details/product-details.component';

export const routes: Routes = [
    {
        path:"",
        component:HomeComponent
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
