import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { GitHubServiceProvider } from '../../providers/git-hub-service/git-hub-service';
@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
  providers: [GitHubServiceProvider]
})
export class HomePage {

  constructor(public navCtrl: NavController, private githubService: GitHubServiceProvider) {
  }

  getUser () : void {
    console.log('hola')
    console.log(this)
    this.githubService.getUserInfo()
  }
}
