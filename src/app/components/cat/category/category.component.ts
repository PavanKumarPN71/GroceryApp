import { Component, OnInit } from '@angular/core';
import {AuthService} from 'src/app/services/auth.service'

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {


  public category:any[]=[];
  constructor(private auth: AuthService) {
    auth.getCategory().subscribe(res=>{
      console.log(res.data)
    this.category=res.data;
    });
   }




  ngOnInit(): void {
  }

}
