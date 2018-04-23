import { Component, OnInit } from '@angular/core';
import { ResearchArticleService } from '../shared/services/research-article-service.services';
import { ResearchArticle } from '../shared/models/research-article.model';

@Component({
  selector: 'app-research-article-list',
  templateUrl: './research-article-list.component.html',
  styleUrls: ['./research-article-list.component.css']
})
export class ResearchArticleListComponent implements OnInit {


  articaleList:ResearchArticle[];

  constructor(private researchArticleListFromService:ResearchArticleService) { }

  ngOnInit() {
    
    this.articaleList=this.researchArticleListFromService.researchArticleList;

  }

  selectedFunc(selcted:ResearchArticle){
    this.researchArticleListFromService.setSelected( selcted);

    }

}
