import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule} from  '@angular/common/http'

import { CatmodRoutingModule } from './catmod-routing.module';
import { CartComponent } from './cart/cart.component';


@NgModule({
  declarations: [
    CartComponent
  ],
  imports: [
    CommonModule,
    CatmodRoutingModule,HttpClientModule
  ]
})
export class CatmodModule { }
