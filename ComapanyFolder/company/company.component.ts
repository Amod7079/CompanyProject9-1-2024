import { Component, OnInit } from '@angular/core';

import { CompanyDetails } from 'src/app/CompanyDetails';
import { Router } from '@angular/router';
import { CompanyIdNameAddress } from 'src/app/Company.services';

@Component({
  selector: 'app-company',
  templateUrl: './company.component.html',
  styleUrls: ['./company.component.css'],

})
export class CompanyComponent implements OnInit {
  id: any;
  name: any;
  address: any;
  // filterText:string='All'
  objfromOfCompany: CompanyDetails[]
  companyFilter: any;
  constructor(private companyIdNameAddress: CompanyIdNameAddress, private router: Router) {

    this.objfromOfCompany = companyIdNameAddress.company



  }

  ngOnInit(): void {
    console.log(this.companyFilter)
  }
  goToCompanyEditSectio(value: any) {
    this.companyIdNameAddress.objToEdit = value;
    console.log(value);


    const queryParams1 = {
      //id: value.id,
      name: value.name,
      address: value.address,
    };


    this.router.navigate(['company/company-edit'], { queryParams: queryParams1 });
  }


}
