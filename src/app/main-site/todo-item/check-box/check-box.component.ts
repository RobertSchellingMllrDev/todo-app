import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-check-box',
  templateUrl: './check-box.component.html',
  styleUrls: ['./check-box.component.css']
})
export class CheckBoxComponent implements OnInit {
  @Input() isEdit?: boolean;
  @Input() isFinished?: boolean;

  constructor() { }

  ngOnInit(): void {
  }

}
