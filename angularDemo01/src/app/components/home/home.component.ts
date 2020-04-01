import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {


  public flag: boolean = true

  public orderStatus: number = 1

  public today: any = new Date()

  public keywords: string

  constructor() {
    console.log(this.today);

  }

  ngOnInit(): void {
  }

  run() {
    alert('方法！！')
  }
  getData() {
    alert(this.today)
  }
  logData() {
    console.log('fuck you!!');
  }
  getEvent(e) {
    if (e.keyCode == 13) {
      console.log('按了一下回车');
    }
    else {
      console.log(e);
    }
  }
}
