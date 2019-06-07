import { Injectable } from '@angular/core';
import{Http,Header} from 'angular/_http';
import'rxjs/add/operator/map';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {
  private username:string;
  private clientid ='Iv1.45e1e8e0227ce824';
  private clientsecret = '42ba8662bd4a491a0dee7ed0388c264d4e4c50a9';


  constructor(private _http:Http) {
    console.log("service is ready!");
    this.username = 'amwaniki180';
   }
   getProfileInfo(){
     return this._http.get("https://api.github.com/users/" + this.username + "?client_id=" + this.clientid); )
   }
}
