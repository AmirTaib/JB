import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { MainComponent } from './main/main.component';
import { ResearchArticleInfoComponent } from './research-article-info/research-article-info.component';
import { ResearchArticleListComponent } from './research-article-list/research-article-list.component';
import { ResearchArticleService } from './shared/services/research-article-service.services';


@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    HeaderComponent,
    MainComponent,
    ResearchArticleInfoComponent,
    ResearchArticleListComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [ResearchArticleService],
  bootstrap: [AppComponent]
})
export class AppModule { }
