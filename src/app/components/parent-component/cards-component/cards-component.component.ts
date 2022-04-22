import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { book } from 'src/app/project_constants/books';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cards-component',
  templateUrl: './cards-component.component.html',
  styleUrls: ['./cards-component.component.css']
})
export class CardsComponentComponent implements OnInit {
  showCards = true;

  constructor(
    private router: Router) {
  }

  ngOnInit(): void {
  }
  numberOfCards = [
    { 'genre': 'Sci-fi', 'desc': 'Nonfiction (also spelled non-fiction) is any document or media content that intends, in good faith, to present only truth and accuracy regarding information, events, or people. Nonfictional content may be presented either objectively or subjectively.', 'img': 'src\assets\comedy.jpg' },
    { 'genre': 'Mythological', 'desc': 'Science fiction (sometimes shortened to sci-fi or SF) is a genre of speculative fiction which typically deals with imaginative and futuristic concepts such as advanced science and technology, space exploration, time travel, parallel universes, and extraterrestrial life.', 'img': 'src\assets\sci-fi.jpg' },
    { 'genre': 'Thrillers', 'desc': 'Thriller is a genre of fiction, having numerous, often overlapping subgenres. Thrillers are characterized and defined by the moods they elicit, giving viewers heightened feelings of suspense, excitement, surprise, anticipation and anxiety. Successful examples of thrillers are the films of Alfred Hitchcock.', 'img': 'src\assets\thriller.jpg' },
    { 'genre': 'Adventures', 'desc': 'Nonfiction (also spelled non-fiction) is any document or media content that intends, in good faith, to present only truth and accuracy regarding information, events, or people. Nonfictional content may be presented either objectively or subjectively.', 'img': 'src\assets\thriller.jpg' }
    , { 'genre': 'Fiction', 'desc': 'Fitness means the condition of being physically and mentally fit with good health. It is the ability to carry out daily tasks with vigor and alertness, without undue fatigue, and with ample energy to enjoy life.', 'img': 'src\assets\thriller.jpg' }
  ];


  exploreMore(data) {
    this.showCards = false;
    sessionStorage.setItem('genre', data);
    this.router.navigate(['genre']);
  }

}
