import { Component, OnInit } from '@angular/core';
import { UserService } from '../users/user.service';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  profile:any;
  repos:any;
  username:string;
  constructor(private profileService: UserService) {

  }
  findProfile(){
    this.profileService.updateProfile(this.username);
    this.profileService.getProfileInfo().subscribe(profile => {
      console.log(profile);
      this.profile = profile;
    });
    this.profileService.getProfileRepos().subscribe(repos =>{
      console.log(repos);
      this.repos = repos;
    })
  }

  ngOnInit() {
  }

}
