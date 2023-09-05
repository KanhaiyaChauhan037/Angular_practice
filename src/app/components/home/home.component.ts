import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { NgForm } from "@angular/forms"
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  count = 0;
  counter(type: string) {
    type === "add" ? this.count++ : this.count--
    //     if (type === "add") {
    //    this.count++
    //     } else {
    //       this.count--
    //  }
  }
  disname = "";
  getname(val: string) {
    this.disname = val
  }
  // userdata: any = {};

  // getdata(data:NgForm) {
  //   this.userdata = data;
  //   console.log(data);


  // }

  userdata: any[] = [];

  ngOnInit() {
    const arrd = localStorage.getItem("data");
    if (arrd) {
      this.userdata = JSON.parse(arrd);
    }
  }

  getdata(data: NgForm) {
    const arrdata = data;
    this.userdata.push(arrdata);
    console.log(this.userdata);

    localStorage.setItem("data", JSON.stringify(this.userdata));
  }





}
