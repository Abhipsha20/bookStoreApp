import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, of, Subject } from 'rxjs';
import { Book } from 'src/app/project_constants/Book';

@Injectable({
  providedIn: 'root'
})
export class BookListService {
  BookListCart = new BehaviorSubject<any>([]);
  cart:any = [];
  constructor() { }

  sendItemToCart(item:any) {
    this.cart.push(item);   
  }
  // setProduct(val:any) {
  //   this.cart.push(...val);
  //   this.BookListCart.next(this.cart);
  // }
  getItemInCart() {
    return of(this.cart);
  }
}
