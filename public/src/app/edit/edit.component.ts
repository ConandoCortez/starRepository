import { Component, OnInit } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject'
import { CommunicateService } from '../communicate.service'
import { Subscription } from "rxjs/Subscription";
import { OnDestroy } from "@angular/core";
import { Star } from  '../starClass';
import { HttpService } from '../http.service'
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
    subscription: Subscription
    userName: '';
    star: any;
    paramID: any;
    id: any;
    title: String;
    // Create a current date to store today's date. This is to see if user should be able to bid on the item
    constructor(private _communicateService: CommunicateService, private _httpService: HttpService, private _router: Router, private _route: ActivatedRoute) {
        this.subscription = _communicateService.observedUser.subscribe(
            (updateUser) => { this.userName = updateUser; },
            (err) => { console.log('error', err)},
            () => {}
        )
        this.paramID = this._route.params.subscribe((param)=> {
            this.id = param.id;
        })
    }
    onDestroy(){
      this.subscription.unsubscribe();
      this.paramID.unsubscribe();
    }

    updateStar(){
        this._httpService.updateStar(this.id, this.star).then(product => {this._router.navigate(['/dashboard'])}).catch(err => console.log(err))
    }

  ngOnInit() {
      // On initialization, get the information of the auction. Set variable product to the results then set variable endDate with a new Date using the end date
      this._httpService.getStar(this.id).then(product => {this.star = product, this.title = product.title}).catch(err => console.log(err))
  }


}
