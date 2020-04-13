import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Name } from './name';

@Injectable({
  providedIn: 'root'
})
export class NamesService {

  constructor(private http: HttpClient) { }

  getNames () {
    return this.http.get<Name[]>('http://localhost/test/namelist.php');
  }
}
