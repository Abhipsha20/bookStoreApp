import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Book } from 'src/app/project_constants/Book';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  cartItem: any =[];
  cartArray: any=[];
  CartSubject = new BehaviorSubject([]);

  constructor() { }

  sendItemToCart(array:Book){
    this.cartItem.push(array);
    this.CartSubject.next(this.cartItem);
  }
  getItemInCart(){
    this.cartArray = this.CartSubject.asObservable();
  }
}
