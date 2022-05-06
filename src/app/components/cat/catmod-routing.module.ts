import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SubcategoryComponent } from './subcategory/subcategory.component';
import { ProductsComponent } from './products/products.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { AuthGuard } from 'src/app/guard/auth.guard';

const routes: Routes = [
{path:'subcategory/:id',component:SubcategoryComponent,canActivate:[AuthGuard]},
{path:'products/:id',component:ProductsComponent,canActivate:[AuthGuard]},
{path:'productdetail/:id',component:ProductDetailComponent,canActivate:[AuthGuard]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CatmodRoutingModule { }
