import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {
  private username:string;
  private clientid ='f99cd86e883d80b85a5c';
  private clientsecret = '8a3f4a7f60db17677b0e0be1a1b15246afc4e71e';


  constructor(private _http:Http) {
    console.log("service is ready!");
    this.username = 'amwaniki180';
   }
   getProfileInfo(){
     return this._http.get("https://api.github.com/users/" + this.username + "?client_id=" + this.clientid + "&client_secret=" + this.clientsecret )
     .map(res => res.json());
   }
   getProfileRepos(){
    return this._http.get("https://api.github.com/users/" + this.username + "/repos?client_id=" + this.clientid + "&client_secret=" + this.clientsecret )
    .map(res => res.json());
  }
  updateProfile(username : string){
    this.username = username;
  }
}
