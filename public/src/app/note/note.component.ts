import { Component, OnInit } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject'
import { CommunicateService } from '../communicate.service'
import { Subscription } from "rxjs/Subscription";
import { OnDestroy } from "@angular/core";
import { Star } from  '../starClass';
import { HttpService } from '../http.service'
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-note',
  templateUrl: './note.component.html',
  styleUrls: ['./note.component.css']
})
export class NoteComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
