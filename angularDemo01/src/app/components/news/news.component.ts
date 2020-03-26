import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css']
})
export class NewsComponent implements OnInit {

  public title = '我是一个新闻组件'
  // 省略public 默认为public
  msg = '我是新闻组件的msg'

  public name: string = '张三'

  // 绑定任何类型
  public item: any = 123

  public userInfo: object = {
    username: 'lizi',
    age: 30
  }

  public message: any

  constructor() {
    this.message = 'the message'
    console.log(this.message);
    this.message = '我是改变后的message的值'
  }

  ngOnInit(): void {
  }

}
