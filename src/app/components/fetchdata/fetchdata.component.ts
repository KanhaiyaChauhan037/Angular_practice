import { Component} from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-fetchdata',
  templateUrl: './fetchdata.component.html',
  styleUrls: ['./fetchdata.component.css']
})
export class FetchdataComponent{

 public apiData: any;

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.getdata();
  }

 public getdata() {
    this.http.get("https://fakestoreapi.com/products").subscribe((data) => {
        this.apiData = data;
        console.log(this.apiData)
      }
    );
  }
}
