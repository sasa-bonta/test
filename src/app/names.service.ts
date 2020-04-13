import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Name } from './name';

@Injectable({
  providedIn: 'root'
})
export class NamesService {

  constructor(private http: HttpClient) { }

}
