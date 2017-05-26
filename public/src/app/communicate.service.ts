import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject'

@Injectable()
export class CommunicateService {

  constructor() { }

  observedUser = new BehaviorSubject(null);
  updateUser(user: String){
    this.observedUser.next(user);
  }
}
