import { Component, OnInit } from '@angular/core';
import { PepoleListService } from './shared/services/pepole-list-service.service';
import { PepoleInfo } from './shared/models/pepole-info.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  showPepole: PepoleInfo;

  constructor(private myPepoleListService: PepoleListService) { }


  ngOnInit() {
    this.showPepole = this.myPepoleListService.pepoleList;
  }



}
