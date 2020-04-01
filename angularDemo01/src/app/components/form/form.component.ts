import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  public peopleInfo: any = {
    username: '',
    sex: '1',
    city: '北京',
    cityList: ['北京', '上海', '成都'],
    hobbies: [
      {
        title: '吃饭',
        checked: false
      },
      {
        title: '睡觉',
        checked: false
      },
      {
        title: '打豆豆',
        checked: false
      },
    ]
  }

  constructor() { }

  ngOnInit(): void {
  }

  doSubmit() {
    console.log(this.peopleInfo);

  }
}
