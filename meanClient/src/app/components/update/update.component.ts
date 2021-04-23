import { Component, OnInit } from '@angular/core';
import{ArticleService} from '../../shared/article.service';
import{Article} from '../../article';
import{Router} from '@angular/router';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent implements OnInit {
  article:Article;
  constructor(private articleService:ArticleService,private router:Router) { }

 

  ngOnInit(): void {
    this.article=this.articleService.getter();
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
    this.updateData();
    }



  updateData(){
    // if(this.article.id==undefined){
    // this.articleService.createArticle(this.article).subscribe(
    //   data=>{
    //     console.log(data);
    //     this.router.navigate(['/']);
    //   },
    //   error=>{
    //   console.log(error);
    //   }
    

    // )
    // }else{
      this.articleService.updateArticle(this.article).subscribe(
        data=>{
          console.log(data);
          this.router.navigate(['/']);
        },
        error=>{
        console.log(error);
        }
      
  
       )
    //  }
    }
}

