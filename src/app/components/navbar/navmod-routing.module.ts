import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { SubcategoryComponent } from '../cat/subcategory/subcategory.component';
import { ProductsComponent } from '../cat/products/products.component';
import { CartComponent } from '../cat/cart/cart.component';
import { AuthGuard } from 'src/app/guard/auth.guard';
const routes: Routes = [{path:'home',component:HomeComponent},
{path:'about',component:AboutComponent},
{path:'contact',component:ContactComponent},
{path:'login',component:LoginComponent},
{path:'register',component:RegisterComponent},
{path:'cart',component:CartComponent,canActivate:[AuthGuard]}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NavmodRoutingModule { }
