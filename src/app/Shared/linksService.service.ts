import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ILinks } from '../models';

const LINKS_JSON_PATH = '/links.json';

@Injectable({
  providedIn: 'root'
})
export class LinksService {

  constructor(private http: HttpClient) { }

  getLinks(): Observable<ILinks[]> {
    return this.http.get<ILinks[]>(LINKS_JSON_PATH);
  }

}
