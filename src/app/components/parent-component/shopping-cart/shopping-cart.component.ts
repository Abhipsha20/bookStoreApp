import { Component, OnInit } from '@angular/core';
import { catchError } from 'rxjs';
import { Book } from 'src/app/project_constants/Book';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.css']
})
export class ShoppingCartComponent implements OnInit{
  cartArray: any = [];
  quantArray: any = [];
  showEmptyCart: boolean = false;
  constQuantity: number = 1;
  total: number = 0;

  constructor(private cartService: CartService) {
  }

  ngOnInit() {
    if(sessionStorage.getItem('items') && Object.keys(sessionStorage.getItem('items').length!==0)) {
      this.cartArray = JSON.parse(sessionStorage.getItem('items'));
      
      // this.cartArray.map(a=>{
      //   if(this.quantArray.indexOf(a) ===-1){
      //     Object.assign(a,{quantity:1, total:a.price});
      //     this.quantArray.push(a);
      //   }
      //   else {
      //     this.constQuantity=+1;
      //     Object.assign(a,{quantity:this.constQuantity, total:(this.constQuantity)*a.price});
      //     //this.quantArray.pop
      //   }
        //console.log(this.quantArray);
      //});
      this.evalPriceItemWise(this.cartArray);
      this.calcTotal(this.cartArray);
      console.log(this.quantArray);
    } else {
      this.showEmptyCart= true;
    }
  }
  evalPriceItemWise(quant:any){
    this.cartArray.forEach((quant)=>{
      quant.price = quant.quantity*quant.price;
      this.quantArray.push(quant);
    });
  }
  calcTotal(array) {
  array.forEach((object)=>{
   this.total= (object.quantity*object.price)+this.total;
  });
  }
  removeItem(event,num){
  if(event){
    this.quantArray.splice(this.quantArray.indexOf(num));
  }

  }

}


