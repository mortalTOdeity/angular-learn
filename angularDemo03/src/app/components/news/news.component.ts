import { Component, OnInit } from '@angular/core';



@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css']
})
export class NewsComponent implements OnInit {

  public list: any[] = []

  constructor() { }

  ngOnInit(): void {
    for (let i = 0; i < 10; i++) {
      this.list.push(`这是第${i}条数据`)
    }
  }

}
