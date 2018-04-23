import { ResearchArticle } from "../models/research-article.model";
import  { EventEmitter} from "@angular/core";

export class ResearchArticleService {

    selectedItemChanged : EventEmitter<ResearchArticle> = new EventEmitter<ResearchArticle>();
    
    setSelected(item : ResearchArticle){
        this.selectedItemChanged.emit(item);
    }

    researchArticleListSelected: ResearchArticle;

    researchArticleList: ResearchArticle[] = [
        {
            "articleType": "Philosophic Article",
            "authorDisplay": ["Eric Spana", "David M. MacAlpine", "Brian Oliver"],
            "score": 8.7305155
        },
        {
            "articleType": "Geography Article",
            "authorDisplay": ["Alexander Stark", "Julius Brennecke"],
            "score": 8.6259165
        },
        {
            "articleType": "Geometry Article",
            "authorDisplay": ["Shanshan Zhou", "Robert R. H. Anholt"],
            "score": 8.570143
        },
        {
            "articleType": "Physics Article",
            "authorDisplay": ["Thomas Sandmann", "Stephen M. Cohen"],
            "score": 8.509945
        },
        {
            "articleType": "Web Article",
            "authorDisplay": ["Gengxin Chen", "Wanhe Li", "Jody Barditch", "Tim Tully"],
            "score": 8.482248
        },
        {
            "articleType": "History Article",
            "authorDisplay": ["Martin Kapun", "Viola Nolte", "Thomas Flatt", "Christian Schlötterer"],
            "score": 8.346529
        },
        {
            "articleType": "Math Article",
            "authorDisplay": ["Christoph C. H. Langer", "Radoslaw K. Ejsmont"],
            "score": 8.214917
        },
        {
            "articleType": "Research Article",
            "authorDisplay": ["Sarah Schunter", "Raffaella Villa"],
            "score": 8.213926
        }
    ];


}