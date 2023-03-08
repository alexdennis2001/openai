import { Component, OnInit } from '@angular/core';
import { ModerationsService } from '../moderations.service';

@Component({
  selector: 'app-moderations',
  templateUrl: './moderations.component.html',
  styleUrls: ['./moderations.component.css']
})
export class ModerationsComponent implements OnInit {
  constructor(private moderationsService: ModerationsService) { }

  ngOnInit(): void {
    
  }

  result : string = "";
  prompt : string = "";

  postCompletition(){
    let myprompt = `${this.prompt}`;

    var payload = {
      input: myprompt
    }

    this.moderationsService.postCompletition(payload).subscribe((data: any) => {
      // alert(JSON.stringify(data));
      console.log(data);
      this.result = data.results[0].flagged;
    });
  } 

}
