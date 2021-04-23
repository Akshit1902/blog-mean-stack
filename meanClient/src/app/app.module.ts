import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {RouterModule , Routes} from '@angular/router';
import {HttpClientModule} from '@angular/common/http';
import { AppComponent } from './app.component';
import { CreateUpdateComponent } from './components/create-update/create-update.component';
import { ListComponent } from './components/list/list.component';
import { NewComponent } from './components/new/new.component';
import{ArticleService} from './shared/article.service';
import{FormsModule} from '@angular/forms';
import { ReadComponent } from './components/read/read.component';
import { UpdateComponent } from './components/update/update.component';
const appRoutes:Routes=[
  {path:'',component:ListComponent},
  {path:'createUpdate',component:CreateUpdateComponent},
  {path:'read',component:ReadComponent},
  {path:'update',component:UpdateComponent}

]
@NgModule({
  declarations: [
    AppComponent,
    CreateUpdateComponent,
    ListComponent,
    NewComponent,
    ReadComponent,
    UpdateComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [ArticleService],
  bootstrap: [AppComponent]
})
export class AppModule { }
