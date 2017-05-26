import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router'
import { BehaviorSubject } from 'rxjs/BehaviorSubject'
import { CommunicateService } from '../communicate.service'


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  userName: null;
  constructor(
      private router: Router,
      private _communicateService: CommunicateService ){
  }
  onLogin(){
      this._communicateService.updateUser(this.userName);
      if(!this.userName){
          alert("Enter an actual name");
      }
      else{
          this.router.navigate(['/home']);
      }
  }
  ngOnInit() {
  }

}
