import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router'
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-subcategory',
  templateUrl: './subcategory.component.html',
  styleUrls: ['./subcategory.component.css']
})
export class SubcategoryComponent implements OnInit {
  public catId :any;
  public subcategory : any[]=[];


  constructor(private routes:ActivatedRoute, private auth:AuthService) {
    this.catId = this.routes.snapshot.paramMap.get('id');
    console.log(typeof this.catId)
    this.auth.getSubCategory(this.catId).subscribe(respon=>{
      this.subcategory=respon.data;})



  }

  ngOnInit(): void {
  }

}
