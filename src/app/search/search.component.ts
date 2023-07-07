import { Component } from '@angular/core';
import { GetDataService } from '../get-data.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent {
  constructor(private service:GetDataService){}
  Info:any = [];
  userInput = '';
 
  
  ngOnInit(){
      //this.Info = reviewData;
      
      
     this.service.getReviewData().subscribe(data=>{
       this.Info = data;
     })
  }
  getValue(val:string){
    console.warn(val)
    this.userInput = val;
    
  }
  submitConfirmation(event:any) {
    event.preventDefault();
  }
}
