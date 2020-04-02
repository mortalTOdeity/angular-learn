import { Component, OnInit } from '@angular/core';
import { StorageService } from '../../services/storage.service';


@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  public keywords: string
  public historyList: Array<any> = []


  constructor(public storage: StorageService) {
    console.log(this.storage.getInfo());
  }

  ngOnInit(): void {
  }

  doAddBtn() {
    if (this.doCheck(this.historyList, this.keywords)) {
      if (this.keywords !== undefined && this.keywords.length !== 0) {
        this.historyList.push({
          title: this.keywords,
          status: 0
        })
      }
    }
    this.keywords = ''
  }

  deleteHistory(key) {
    this.historyList.splice(key, 1)
  }
  doAdd(code) {
    if (code === 13) {
      this.doAddBtn()
    }
  }
  doCheck(historyList: any, keyword: any) {
    if (historyList.length == 0) {
      return true
    }
    for (let item of historyList) {

      if (item.title == keyword) {
        return false
      }
    }
    return true
  }
}
