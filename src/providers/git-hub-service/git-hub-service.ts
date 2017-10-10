import { Injectable, Output, EventEmitter } from '@angular/core'
import { Http } from '@angular/http'
import 'rxjs/add/operator/map'
import 'rxjs/add/operator/catch'
import 'rxjs/add/operator/do'
import { Observable } from 'rxjs/Observable'

@Injectable()
export class GitHubServiceProvider {

  @Output() onUserSearch: EventEmitter<any> = new EventEmitter<any>()
  constructor(private http: Http) {}

  public getUserInfo(username) {
    return this.http.get(`https://api.github.com/users/${username}`)
                .do(this.logResponse)
                .map(this.extractData)
                .catch(this.handleError)
               
   }

   public getUserRepos(username) {
    return this.http.get(`https://api.github.com/users/${username}/repos`)
               .do(this.logResponse)
               .map(this.extractData)
               .catch(this.handleError)
   }

  private extractData(res: Response) {
    return res.json()
  }

  private logResponse(res: Response) {
    console.log(res)
  }

  private handleError (error: Response | any) {
    let errMsg: string;
    if (error instanceof Response) {
      const err = error || ''
      errMsg = `${error.status} - ${error.statusText || ''} ${err}`
    } else {
      errMsg = error.message ? error.message : error.toString()
    }
    console.error(errMsg)
    return Observable.throw(errMsg)
  }
}
