import { Component,OnInit } from '@angular/core';
import { Textdavinciedit001Service } from '../textdavinciedit001.service';

@Component({
  selector: 'app-textdavinciedit001',
  templateUrl: './textdavinciedit001.component.html',
  styleUrls: ['./textdavinciedit001.component.css']
})
export class Textdavinciedit001Component implements OnInit {
  constructor(private textdavinciedit001 : Textdavinciedit001Service) { }

  ngOnInit(): void {
    
  }

  result : string = "";
  prompt : string = "";

  postCompletition(){
    let myprompt = `${this.prompt}`;

    var payload = {
      model: "text-davinci-edit-001",
      input: myprompt,
      instruction: "Fix the spelling mistakes",
    }

    this.textdavinciedit001.postCompletition(payload).subscribe((data: any) => {
      // alert(JSON.stringify(data));
      console.log(data);
      this.result = data.choices[0].text;
    });
  } 

}
