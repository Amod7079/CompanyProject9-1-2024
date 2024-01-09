import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PasswordServiceService {

  newUserNameFromSignup: string = ""
  newUserPasswordFromSignup: string = ""
  userAfterLogin={
    u_name:'',
    userType:'',
    pwd:''

  }

  user = [
    {
      u_Name: 'amod',
      userType: 'SuperAdmin',
      pwd: 'Amod123'
    },
    {
      u_Name: 'pramod',
      userType: 'Admin',
      pwd: 'pramod123'
    }
  ]

  getUserType() {
    const foundUser = this.user.find((x) => x.u_Name === this.newUserNameFromSignup);
    
    if (foundUser) {
      return foundUser.userType;
    } else {
      
      return null; // Or any other default value/error handling.
    }
  }
  
  constructor() { }
}
