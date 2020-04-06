import { Component, OnInit } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { HttpserviceService } from '../../services/httpservice.service';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css']
})
export class NewsComponent implements OnInit {
  public list: any[] = [];
  constructor(public http: HttpClient, public httpService: HttpserviceService) { }

  ngOnInit(): void {
  }
  getData() {
    let api = 'http://a.itying.com/api/productlist'
    console.log('get');
    this.http.get(api).subscribe((response: any) => {
      console.log(response);
      this.list = response.result
    })
  }
  getJsonpData() {
    let api = 'http://a.itying.com/api/productlist'
    this.http.jsonp(api, 'callback').subscribe(response => {
      console.log(response);
    })
  }
  getAxiosData() {
    let api = 'http://a.itying.com/api/productlist'
    this.httpService.axiosGet(api)
  }
}
