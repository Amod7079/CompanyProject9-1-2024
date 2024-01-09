import { Directive, ElementRef, OnInit } from '@angular/core';
import { PasswordServiceService } from '../password-service.service';

@Directive({
  selector: '[appPermissionDirective]'
})
export class PermissionDirectiveDirective implements OnInit {

  permissionDetails = [
    {
      userType: 'SuperAdmin',
      access: ["view", "edit"]
    },
    {
      userType: 'Admin',
      access: ["view"]
    }
  ];

  constructor(private elementRef: ElementRef, private passwordServiceService: PasswordServiceService) { }

  ngOnInit() {
    const userType = this.passwordServiceService.getUserType();
    console.log(userType);

    // Your directive logic here
    // elementRef.nativeElement.style.color = "red"
  }
}
