import { Component, OnInit } from '@angular/core';
import{Router} from '@angular/router';
import{ArticleService} from '../../shared/article.service';
import {Article} from '../../article';

@Component({
  selector: 'app-create-update',
  templateUrl: './create-update.component.html',
  styleUrls: ['./create-update.component.css']
})
export class CreateUpdateComponent implements OnInit {
  article:Article;
  constructor(private articleService:ArticleService,private router:Router) { }

  ngOnInit(){
    this.article={
      id:'',
      title:'',
      author:'',
      markdown:'',
      createdAt:null,
      like:0,
      dislike:0
    }
    // this.article.title='';
    // this.article.author='';
    // this.article.markdown='';

    // this.article=this.articleService.getter();
  }
  
  valid(){
    var flag1=0,flag2=0,flag3=0;
    if(this.article.title=='')
    alert("Enter title");
    else flag1=1;
    
    if(this.article.author=='')
    alert("Enter author");
    else flag2=1;
    
    if(this.article.markdown=='')
    alert("Enter description");
    else flag3=1;

    if(flag1&&flag2&&flag3)
    this.createOrUpdate();
    }
  
  createOrUpdate(){
    // if(this.article.id==undefined){

    this.articleService.createArticle(this.article).subscribe(
      data=>{
        console.log(data);
        this.router.navigate(['/']);
      },
      error=>{
      console.log(error);
      }
    

    )
    // }else{
    //   this.articleService.updateArticle(this.article).subscribe(
    //     data=>{
    //       console.log(data);
    //       this.router.navigate(['/']);
    //     },
    //     error=>{
    //     console.log(error);
    //     }
      
  
    //   )
    // }
  }

}
