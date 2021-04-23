import { Component, OnInit } from '@angular/core';
import{ArticleService} from '../../shared/article.service';
import{Article} from '../../article';
import{Router} from '@angular/router';
@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  // likesNo:0;
  x:Article;
   articles:Article[];
  constructor( private _articleService:ArticleService,private router:Router) { }

  ngOnInit(){
    this.articles=[];
    this.readArticles();
  }
  

  readArticles(){
    this._articleService.readArticles().subscribe(
      data=>{
        console.log(data);
        
        for(var i=0;i<data['msg'].length;i++)
        {
            this.x={
              id:data['msg'][i]._id,title:data['msg'][i].title,
              author:data['msg'][i].author,markdown:data['msg'][i].markdown, createdAt:data['msg'][i].createdAt ,like:data['msg'][i].like,dislike:data['msg'][i].dislike}
              this.articles.push(this.x);
        }
        
        // this.articles=data['msg'];
      } ,
      error=>{
        console.log(error);
      }
    )
  }

  

  doUpdate(article){
    this._articleService.setter(article);
    this.router.navigate(['/update'])
  }

  dislikeClick(article){
    article.dislike++;
    // this._articleService.updateArticle(article)

    this._articleService.updateArticle(article).subscribe(
      data=>{
        console.log(data);
        this.router.navigate(['/']);
      },
      error=>{
      console.log(error);
      }
    

     )
    

  }
  likeClick(article){
    article.like++;
    this._articleService.updateArticle(article).subscribe(
      data=>{
        console.log(data);
        this.router.navigate(['/']);
      },
      error=>{
      console.log(error);
      }
    

     )
    

  }
  


  read(article){
    this._articleService.setter(article);
    this.router.navigate(['/read'])
  }

  doDelete(article){
    this._articleService.deleteArticle(article.id).subscribe(
      data=>{
          this.articles.splice(this.articles.indexOf(article),1);
      },
      error=>{

      }
    )
  }
}
