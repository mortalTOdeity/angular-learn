import { Injectable } from '@angular/core';
import { Observable } from 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class RequestService {

  constructor() { }
  getRxjsData() {
    return new Observable<any>((observer) => {
      setTimeout(() => {
        let username = '张三'
        observer.next(username)
        // observer.error('失败')
      }, 5000)
    })
  }
  getMulitpleData() {
    return new Observable<any>((observer) => {
      setInterval(() => {
        let username = 'lala'
        observer.next(username)
        // observer.error('失败')
      }, 1000)
    })
  }
}
