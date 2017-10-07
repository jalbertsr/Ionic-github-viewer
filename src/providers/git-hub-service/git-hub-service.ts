import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';

@Injectable()
export class GitHubServiceProvider {

  constructor(private http: Http) {
    console.log('Hello GitHubServiceProvider Provider');
  }

  getUserInfo(){
    return this.http.get(`https://api.github.com/users/jalbertsr`)
            .do((res: Response) => console.log(res))
            .map((res: Response) => res.json())
   }

}
