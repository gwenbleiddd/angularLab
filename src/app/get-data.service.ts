import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'


@Injectable({
  providedIn: 'root'
})
export class GetDataService {
 

  constructor(private http:HttpClient) { }

  getReviewData(){
    return this.http.get('../../assets/data.json');
  }

 
}
