import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  public catId :any;
  public products : any[]=[];


  constructor(private routes:ActivatedRoute, private auth:AuthService) {
    this.catId = this.routes.snapshot.paramMap.get('id');
    console.log(typeof this.catId)
    this.auth.getProducts(this.catId).subscribe(respon=>{
    this.products=respon.data
    console.log(respon);})
    }

  ngOnInit(): void {
  }
  }
