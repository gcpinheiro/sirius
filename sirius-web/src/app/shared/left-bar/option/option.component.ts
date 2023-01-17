import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-option',
  templateUrl: './option.component.html',
  styleUrls: ['./option.component.sass']
})
export class OptionComponent implements OnInit {
  @Input() pathIcon = '';
  @Input() text = '';
  @Input() newList = '';

  constructor() { }

  ngOnInit(): void {
  }

}
