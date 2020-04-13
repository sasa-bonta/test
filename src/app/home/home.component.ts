import { Component, OnInit } from '@angular/core';
import { Name} from '../name';
import { NamesService} from '../names.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
