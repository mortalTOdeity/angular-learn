import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  @Input() the_info: any
  @Input() doAlert: any
  @Input() the_parrent: any
  constructor() { }

  ngOnInit(): void {
  }
  do() {
    this.doAlert()
  }
  dodo() {
    this.the_parrent.do_pa()
  }

}
