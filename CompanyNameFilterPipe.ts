// import { Pipe,PipeTransform } from "@angular/core";

// @Pipe({
//     name:'filtCompanyName'
// })
// export class CompanyNameFilterPipe implements PipeTransform
// {
//     transform(company:any[],CompanyName:string) {
   
//         if(CompanyName==='' || company.length===0)
//         {
//             return company;
//         }
//         else 
//         {
//             return company.filter((company)=>
//             {
//  return company[CompanyName].toLowerCase().includes(company)
//             })
//         }
        



//     }

// }

import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
  name: 'filtCompanyName'
})
export class CompanyNameFilterPipe implements PipeTransform {
  transform(company: any[], CompanyName: string): any[] {
  //  console.log(CompanyName)
    if (CompanyName === '' || company.length === 0 ||CompanyName===undefined) {
      return company;// y ko bahr fek diya
    } else {
      return company.filter((x) =>{
      return  x.name.toLowerCase().includes(CompanyName.toLowerCase())
     } );
    }
  }
}
