import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { PepoleInfo } from '../models/pepole-info.model';


@Injectable()
export class PepoleListService {

    pepoleList: any = { data: [] };
    constructor(private myHttpClient: HttpClient) {
        const apiUrl = `https://reqres.in/api/users`;
        this.myHttpClient.get(apiUrl).subscribe((x: PepoleInfo) => { this.pepoleList.data = x.data; });
    }
}
