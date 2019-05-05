import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private username: string;
  private clientid = 'afa2807d049622100be2';
  private clientsecret = '8a49406ffd69f6dba740825fcb3fe6f2be57519c';

  constructor(private http:HttpClient) {
    console.log("service is now ready!");
    this.username = 'abigailwambui';
  }

  getProfileInfo(){
    return this.http.get("https://api.github.com/users/" + this.username + "?client_id=" + this.clientid + "&client_secret=" + this.clientsecret );
  }
  getProfileRepos(){
    return this.http.get("https://api.github.com/users/" + this.username + "/repos?client_id=" + this.clientid + "&client_secret=" + this.clientsecret );
  }
  updateProfile(username:string){
    this.username = username;
  }
}
