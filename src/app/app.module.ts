import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NavmodModule } from './components/navbar/navmod.module';
import { HttpClientModule } from '@angular/common/http'
import {CatmodModule} from './components/cat/catmod.module'
import { FormsModule } from '@angular/forms'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar/navbar.component';
import { HomeComponent } from './components/navbar/home/home.component';
import { AboutComponent } from './components/navbar/about/about.component';
import { ContactComponent } from './components/navbar/contact/contact.component';
import { LoginComponent } from './components/navbar/login/login.component';
import { RegisterComponent } from './components/navbar/register/register.component';
import { CategoryComponent } from './components/cat/category/category.component';
import { SubcategoryComponent } from './components/cat/subcategory/subcategory.component';
import { ProductsComponent } from './components/cat/products/products.component';
import { ProductDetailComponent } from './components/cat/product-detail/product-detail.component';
import { HeaderComponent } from './components/header/header.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    AboutComponent,
    ContactComponent,
    LoginComponent,
    RegisterComponent,
    CategoryComponent,
    SubcategoryComponent,
    ProductsComponent,
    ProductDetailComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NavmodModule,CatmodModule,
    HttpClientModule,FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
