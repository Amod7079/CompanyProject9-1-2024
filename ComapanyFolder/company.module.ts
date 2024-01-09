import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { CompanyComponent } from "./company/company.component";
import { CompanyEditComponent } from "./company-edit/company-edit.component";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";
import { CompanyNameFilterPipe } from "../CompanyNameFilterPipe";

const routes: Routes = [
    {
        path: '',
        component: CompanyComponent
    },
    {
        path: 'company-edit',
        component: CompanyEditComponent
    },



]
@NgModule({
    declarations: [CompanyComponent, CompanyEditComponent, CompanyNameFilterPipe],
    imports: [RouterModule.forChild(routes), CommonModule, FormsModule]

})

export class companyModule {

}