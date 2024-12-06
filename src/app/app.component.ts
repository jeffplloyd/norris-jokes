import { Component, OnInit } from '@angular/core';
import { AppService } from './app.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  loading: boolean;
  chuckJoke: String;

  constructor(private appSvc: AppService) { }

  ngOnInit() {
    this.getJoke();
  }

  getJoke() {
    this.loading = true;
    this.chuckJoke = null;
    this.appSvc.getJoke().subscribe((response: any) => {
      this.chuckJoke = response.value;
      this.loading = false
    });
  }
}
