import { Component, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { GetDataService } from '../get-data.service';

@Component({
  selector: 'app-title',
  templateUrl: './title.component.html',
  styleUrls: ['./title.component.css']
})
export class TitleComponent {
  constructor(private currentRoute:ActivatedRoute,private service:GetDataService){}
  
  reviewId:any;
  Info:any = [];
  
  
  ngOnInit(){
     this.reviewId = this.currentRoute.snapshot.paramMap.get('id');
     this.service.getReviewData().subscribe(data=>{
       this.Info = data;
     })
  }

  
}
