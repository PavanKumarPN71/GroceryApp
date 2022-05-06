import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
 public cart: any[]=[]
  constructor(private auth:AuthService) {
    console.log(auth.getCart());
    this.cart=this.auth.getCart();
  }


  ngOnInit(): void {
  }

}
