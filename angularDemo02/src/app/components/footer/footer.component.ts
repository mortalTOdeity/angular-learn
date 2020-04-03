import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
  @Output() public outer = new EventEmitter()
  constructor() { }

  ngOnInit(): void {
  }
  sendParent() {
    this.outer.emit('我是子组件中的数据')
  }

}
