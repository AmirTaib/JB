import { Component, OnInit } from '@angular/core';
import { ResearchArticleService } from '../shared/services/research-article-service.services';
import { ResearchArticle } from '../shared/models/research-article.model';

@Component({
  selector: 'app-research-article-info',
  templateUrl: './research-article-info.component.html',
  styleUrls: ['./research-article-info.component.css']
})
export class ResearchArticleInfoComponent implements OnInit {

  showSelected: ResearchArticle;

  constructor(private researchArticleListService: ResearchArticleService) { }


  ngOnInit() {
    this.researchArticleListService.selectedItemChanged.subscribe(x => {
      this.showSelected = x;
    });

  }

}
