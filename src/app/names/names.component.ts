import { Component, OnInit } from '@angular/core';
import {Name} from '../name';
import {NamesService} from '../names.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-names',
  templateUrl: './names.component.html',
  styleUrls: ['./names.component.css']
})
export class NamesComponent implements OnInit {
  constructor() { }

  ngOnInit(): void {
  }

}

