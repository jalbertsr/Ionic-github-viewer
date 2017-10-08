import { Component } from '@angular/core';
import { GitHubServiceProvider } from '../../providers/git-hub-service/git-hub-service';

@Component({
  selector: 'page-list',
  templateUrl: 'list.html',
  providers: [GitHubServiceProvider]
})
export class ListPage {

  public username = 'jalbertsr'
  public repos

  constructor(private githubService: GitHubServiceProvider) {}

  ngOnInit () {
    this.githubService.getUserRepos(this.username)
        .subscribe(data => this.repos = data)
    console.log(this.repos)
    }
  }
