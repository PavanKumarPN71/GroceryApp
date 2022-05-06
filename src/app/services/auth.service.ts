import { Injectable } from '@angular/core';
import {HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';
import { category } from '../interfaces/categoryInt';
@Injectable({
  providedIn: 'root'
})
export class AuthService {
 public cartt :any[]=[]
  constructor(private http:HttpClient) { }

  getCategory():Observable<category>{
    return this.http.get<category>("http://apolis-grocery.herokuapp.com/api/category")
  }

  getSubCategory(id:any): Observable<category>{
    return this.http.get<category>(`http://apolis-grocery.herokuapp.com/api/subcategory/${id}`)
  }

  getProducts(id:any): Observable<category>{
    return this.http.get<category>(`http://apolis-grocery.herokuapp.com/api/products/cat/${id}`)
  }

  getProductsDetails(id:any): Observable<category>{
    return this.http.get<category>(`http://apolis-grocery.herokuapp.com/api/products/${id}`)
  }

  register(data: any): Observable<any>{
    return this.http.post<any>('http://apolis-grocery.herokuapp.com/api/auth/register', data)
  }


  login(data: any): Observable<any>{
    return this.http.post<any>('http://apolis-grocery.herokuapp.com/api/auth/login', data)
  }

  checkToken(): boolean{
    if(localStorage.getItem('token')){
      return true;
    }else{
      return false;
    }
  }

  setCart(data:any){
    this.cartt.push(data);
    console.log("set")

  }

  getCart(){
    console.log("left from service")
    return this.cartt;
  }


}
