import { Injectable } from '@angular/core';
import axios from 'axios';

@Injectable({
  providedIn: 'root'
})
export class HttpserviceService {

  constructor() { }
  axiosGet(api) {
    axios.get(api).then(response => {
      console.log(response)
    })
  }
}
