import { Component, OnInit } from '@angular/core';
import{Router} from '@angular/router';
import{ArticleService} from '../../shared/article.service';
import {Article} from '../../article';


@Component({
  selector: 'app-new',
  templateUrl: './new.component.html',
  styleUrls: ['./new.component.css']
})
export class NewComponent implements OnInit {

  constructor(private router:Router,private articleService:ArticleService) { }

  ngOnInit() {
  }
  newArticle(event:any){
    event.preventDefault();
    this.articleService.setter(new Article());
    this.router.navigate(['/createUpdate']);
  }
}
