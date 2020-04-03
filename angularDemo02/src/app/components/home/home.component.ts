import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  public the_info: string = '我是首页组件的信息'
  public zuichou: string = '爬'
  constructor() { }

  ngOnInit(): void {
  }
  doAlert() {
    alert('fuck you')
  }
  do_pa(e) {
    // e => 子组件给父组件广播的数据
    alert('爬爬爬爬爬爬爬！！！！');
    console.log(e);
  }
}
