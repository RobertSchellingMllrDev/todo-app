import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-title-screen',
  templateUrl: './title-screen.component.html',
  styleUrls: ['./title-screen.component.css']
})
export class TitleScreenComponent implements OnInit {
  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  go_to_main() {
    this.router.navigateByUrl('main')
  }
}
