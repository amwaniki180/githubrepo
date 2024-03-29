import { ProfileService } from './../../services/profile.service';
import { Component, OnInit } from '@angular/core';
// iport{map} from 'rxjs/Operator'
import {HttpClient} from '@angular/common/http'



@Component({
  selector: 'gg-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
profile : any[];
repos : any[];
username : string;

  constructor(private profileservive: ProfileService) { 
  
    }
    findProfile(){
      this.profileservive.updateProfile(this.username);
      this.profileservive.getProfileInfo().subscribe(profile =>{
        console.log(profile );
        this.profile = profile;
      });
      this.profileservive.getProfileRepos().subscribe(this.repos =>{
        console.log(repos );
        this.repos = repos;
    })
  }

  ngOnInit() {
   
  }

}
