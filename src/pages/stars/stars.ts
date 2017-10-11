import { Component } from '@angular/core';
import { GitHubServiceProvider } from '../../providers/git-hub-service/git-hub-service';

@Component({
  selector: 'page-stars',
  templateUrl: 'stars.html',
  providers: [GitHubServiceProvider]
})
export class StarPage {

  public username = 'jalbertsr'
  public starred
  
  constructor(private githubService: GitHubServiceProvider) {}

  ngOnInit () {
    this.githubService.getUserStars(this.username)
        .subscribe(data => this.starred = data)
  }
}
