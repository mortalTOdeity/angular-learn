import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {


  public flag: boolean = true

  public orderStatus: number = 1

  constructor() { }

  ngOnInit(): void {
  }

}
