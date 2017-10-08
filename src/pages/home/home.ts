import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { GitHubServiceProvider } from '../../providers/git-hub-service/git-hub-service';
@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
  providers: [GitHubServiceProvider]
})
export class HomePage {

  public username = ''
  public logo = 'https://assets-cdn.github.com/images/modules/logos_page/Octocat.png'
  public data
  public loaded = false

  constructor(public navCtrl: NavController, private githubService: GitHubServiceProvider) {}

  ngOnInit() {}
  
  renderUser () {
    this.githubService.getUserInfo(this.username)
        .subscribe(data => {
          this.data = data
          this.loaded = true
          console.log(this.data)
        })
  }
}
