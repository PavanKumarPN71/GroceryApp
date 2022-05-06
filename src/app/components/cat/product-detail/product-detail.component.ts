import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { ActivatedRoute } from '@angular/router';
import { CartComponent } from '../cart/cart.component';
@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {
public prodId:any;
public prodDet:any;

  constructor(private routes:ActivatedRoute, private auth:AuthService) {
    this.prodId = this.routes.snapshot.paramMap.get('id');
    console.log(typeof this.prodId)
    this.auth.getProductsDetails(this.prodId).subscribe(respon=>{
    this.prodDet=respon.data
    console.log(respon);})
    }
    cartHandler(){
      this.auth.setCart(this.prodDet);
      console.log("sending")
    }

  ngOnInit(): void {
  }

}
