import { Component, OnInit } from '@angular/core';
import{Router} from '@angular/router';
import{ArticleService} from '../../shared/article.service';
import {Article} from '../../article';

@Component({
  selector: 'app-read',
  templateUrl: './read.component.html',
  styleUrls: ['./read.component.css']
})
export class ReadComponent implements OnInit {
  article:Article;
  constructor(private articleService:ArticleService,private router:Router) { }

  

  ngOnInit(): void {
    this.article=this.articleService.getter();
  }
  
}
