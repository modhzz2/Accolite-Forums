import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-answer-query-page',
  templateUrl: './answer-query-page.component.html',
  styleUrls: ['./answer-query-page.component.css']
})
export class AnswerQueryPageComponent implements OnInit {

  constructor(private router: Router) { }

  searchTab(){
    this.router.navigate(['/search']);
  }

  logout(){
    this.router.navigate([""]);
  }

  ngOnInit(): void {
  }

}