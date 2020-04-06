import { Component, OnInit } from '@angular/core';
import { RequestService } from '../../services/request.service'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  public the_info: string = '我是首页组件的信息'
  public zuichou: string = '爬'
  constructor(public request: RequestService) { }

  ngOnInit(): void {
    // 获取异步方法里面的数据
    // let rxjsData = this.request.getRxjsData();
    // rxjsData.subscribe((data) => {
    //   console.log(data);
    // })

    // 过2秒后执行撤回
    let stream = this.request.getRxjsData();
    let stream_repeat = this.request.getMulitpleData();
    let the_stream = stream.subscribe((data) => {
      console.log(data);
    })
    stream_repeat.subscribe((data) => {
      console.log(data);
    })
    setTimeout(() => {
      the_stream.unsubscribe();
    }, 2000)
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
