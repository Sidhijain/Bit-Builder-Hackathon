import { Component, OnInit } from '@angular/core';
import { DemoDataService } from './Services/demo-data.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'hackfrontend';
  data: any; 

  constructor(private dataService : DemoDataService) {}
  // ngOnInit() :void{
  // this.dataService.getData().subscribe(
  //   (response: any) => {
  //     if(response.status=="success"){
  //     this.data = response.message;
  //     console.log('Data fetched successfully:', response);
  //     }
  //   },
  //   (error: any) => {
  //     console.error('Error fetching data:', error);
  //   }
  // );
  // }
}
