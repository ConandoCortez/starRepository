import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';
import 'rxjs/Rx';


@Injectable()
export class HttpService {

  constructor(private _http: Http) {}

  show_all(){
      return this._http.get('/starDashboard').map(response => response.json()).toPromise();
  }

  show_five(){
      return this._http.get('/topStars').map(response => response.json()).toPromise();
  }

  new(star){
    //   console.log(user)
      return this._http.post('/createStar', star).map(response => response.json()).toPromise();
  }

  getStar(id){
      return this._http.get('/show/' + id).map(response => response.json()).toPromise();
  }

  delete(id){
      return this._http.delete('/delete/' + id).map(response => response.json()).toPromise();
  }

  updateStar(id, star){
      return this._http.patch('/update/' + id, star).map(response => response.json()).toPromise();
  }

  addNotes(id, note){
      return this._http.patch('/addNote/' + id, note).map(response=>response.json()).toPromise();
  }
}
