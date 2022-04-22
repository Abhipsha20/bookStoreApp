import { Component, OnInit } from '@angular/core';
import { book } from 'src/app/project_constants/books';
import { Book } from 'src/app/project_constants/Book';
import { BookListService } from 'src/app/services/book-list.service';
import { Router } from '@angular/router';

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
  itemBook: any = [];
  constructor(private bookListService: BookListService,
    private router: Router) { }

  ngOnInit(): void {
    if (sessionStorage.getItem('genre') && Object.keys(sessionStorage.getItem('genre')).length !== 0) {
      this.category = sessionStorage.getItem('genre');
      // using foreach
      book.forEach((object) => {
        if (this.category === object.category) {
          this.booklist.push(object);
        }
      });

    }
  }
  addToCart(event, num) {
    if (event) {
      this.itemBook.push(num);
     //console.log(this.itemBook);
     this.bookListService.sendItemToCart(this.itemBook);
     //this.bookListService.BookListCart.next(this.itemBook);
    }
  }
  goToCart(event){
    if(event){
      this.router.navigate['cart'];
    }
    sessionStorage.setItem('genre', '');
  }
}
