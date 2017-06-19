import { Component, OnInit } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject'
import { CommunicateService } from '../communicate.service'
import { Subscription } from "rxjs/Subscription";
import { OnDestroy } from "@angular/core";
import { Star } from  '../starClass';
import { HttpService } from '../http.service'
import { Router } from '@angular/router';

@Component({
  selector: 'app-new',
  templateUrl: './new.component.html',
  styleUrls: ['./new.component.css']
})
export class NewComponent implements OnInit {
  subscription: Subscription
  userName: '';
  star = new Star();
  results;

  constructor(private _communicateService: CommunicateService, private _httpService: HttpService, private _router: Router) {
      this.subscription = _communicateService.observedUser.subscribe(
          (updateUser) => { this.userName = updateUser; },
          (err) => { console.log('error', err)},
          () => {}
      )
  }
  onDestroy(){
    this.subscription.unsubscribe();
  }

  newStar(){
      this.star.author = this.userName;
      this.star.noteCount = 0;
    //   console.log("star Information", this.star);
      this._httpService.new(this.star).then(results => {this.results = results, this._router.navigate(['/home'])})
  }

  ngOnInit() {
  }

}
