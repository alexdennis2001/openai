import { Component, OnInit } from '@angular/core';
import { ImagesgenerationService } from '../imagesgeneration.service';

@Component({
  selector: 'app-imagesgeneration',
  templateUrl: './imagesgeneration.component.html',
  styleUrls: ['./imagesgeneration.component.css']
})
export class ImagesgenerationComponent implements OnInit {
  constructor(private imagesgenerationService: ImagesgenerationService) {}

  ngOnInit(): void {
    
  }

  result: string = '';
  image: string = "";

  postCompletition(){
    let myprompt = `${this.image}`;

    var payload = {
      prompt: myprompt,
      n: 2,
      size: "512x512"
    }

    this.imagesgenerationService.postCompletition(payload).subscribe((data: any) => {
      // alert(JSON.stringify(data));
      console.log(data);
      this.result = data.data[0].url;
    });
  }

}
