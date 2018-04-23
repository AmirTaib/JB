import { Component, OnInit } from '@angular/core';
import { ResearchArticleService } from '../shared/services/research-article-service.services';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  constructor(private researchArticleService:ResearchArticleService) { }

  ngOnInit() {

    
        
  }

}
