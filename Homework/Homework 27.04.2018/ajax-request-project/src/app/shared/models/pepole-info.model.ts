import { PepoleDetails } from './pepole-details.model';

export interface PepoleInfo {


    page: number;
    per_page: number;
    total: number;
    total_pages: number;
    data: PepoleDetails[];

}


