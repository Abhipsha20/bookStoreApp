import { Component, OnInit } from '@angular/core';
import { book } from 'src/app/project_constants/books';
import { Book } from 'src/app/project_constants/Book';
import { Router } from '@angular/router';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-genre-wise-book',
  templateUrl: './genre-wise-book.component.html',
  styleUrls: ['./genre-wise-book.component.css']
})
export class GenreWiseBookComponent implements OnInit {
  category: String;
  booklist: any = [];
  showAddToCart: boolean = true;
  hideAddToCart: boolean = false;
  count: number = 1;
  book:Book[];
  quant: any =1;
  itemBook: any = [];
  constructor(private cartService: CartService,
    private router: Router) { }

  ngOnInit(): void {
    if (sessionStorage.getItem('genre') && Object.keys(sessionStorage.getItem('genre')).length !== 0) {
      this.category = sessionStorage.getItem('genre');
      // using foreach
      // book.forEach((object) => {
      //   if (this.category === object.category) {
      //     this.booklist.push(object);
      //   }
      // });
      book.filter(object=> {
        this.category === object.category;
        this.booklist.push(object);
      });
    }
  }
  addToCart(event, num) {
    if (event) {
      if(this.itemBook.indexOf(num)===-1){
        this.itemBook.push(num);
      } else {
        this.itemBook.splice(this.itemBook.indexOf(num),1); // At position this.itemBook.indexOf(num), remove 1 item.
        this.quant=this.quant+1;
        num.quantity = this.quant;
        this.itemBook.push(num);
      }
    }
    sessionStorage.setItem('items', JSON.stringify(this.itemBook));
  }
  goToCart(event){
    if(event){
      this.router.navigate['cart'];
    }
    sessionStorage.setItem('genre', '');
  }
}
