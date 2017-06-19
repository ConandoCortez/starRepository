import { Component, OnInit } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject'
import { CommunicateService } from '../communicate.service'
import { Subscription } from "rxjs/Subscription";
import { OnDestroy } from "@angular/core";
import { Star } from  '../starClass';
import { HttpService } from '../http.service'
import { Router } from '@angular/router';


@Component({
  selector: 'app-auctions',
  templateUrl: './auctions.component.html',
  styleUrls: ['./auctions.component.css']
})
export class AuctionsComponent implements OnInit {
  subscription: Subscription
  userName: '';
  data;
  note;
  updateNote = {
      description: '',
      author: '',
  }
  id;
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
  ngOnInit() {
      this._httpService.show_five().then( results => {this.data = results}).catch(err => console.log(err))
  }

  deleteAuction(id){
      this._httpService.delete(id).then(results => {this.ngOnInit()}).catch(err => console.log(err))
  }

  clicked(star){
      console.log(star.note)
      this.note = star;
      this.id = star._id
  }

  addNote(){
      this.updateNote.author = this.userName;
      console.log(this.updateNote);
      this._httpService.addNotes(this.id, this.updateNote).then(results => {this.note = '', this.ngOnInit()}).catch(err => console.log(err))
  }

}
