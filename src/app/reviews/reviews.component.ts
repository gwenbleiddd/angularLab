import { Component, EventEmitter, Output } from '@angular/core';
import { GetDataService } from '../get-data.service';

//import reviewData from '../../assets/data.json'
@Component({
  selector: 'app-reviews',
  templateUrl: './reviews.component.html',
  styleUrls: ['./reviews.component.css']
})
export class ReviewsComponent {
  constructor(private service:GetDataService){}
  
  

  Info:any = [];
  userInput = '';
 
  
  ngOnInit(){
      //this.Info = reviewData;

     this.service.getReviewData().subscribe(data=>{
       this.Info = data;
     })
  }

}
