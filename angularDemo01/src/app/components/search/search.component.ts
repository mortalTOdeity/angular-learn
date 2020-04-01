import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  public name: string = 'xiao'
  public keywords: string
  public historyList: Array<any> = []


  constructor() { }

  ngOnInit(): void {
  }

  doAddBtn() {
    if (this.historyList.indexOf(this.keywords) === -1) {
      this.historyList.push({
        title: this.keywords,
        status: 0
      })
      this.keywords = ''
    }
  }
  deleteHistory(key) {
    this.historyList.splice(key, 1)
  }
  doAdd(code) {
    if (code === 13) {
      this.doAddBtn()
    }
  }
  Printer() {
    console.log(this.historyList);

  }

}
