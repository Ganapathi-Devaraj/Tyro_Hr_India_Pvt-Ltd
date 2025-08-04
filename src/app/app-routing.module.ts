import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ServicesComponent } from './services/services.component';
import { AboutComponent } from './about/about.component';
import { RFormComponent } from './r-form/r-form.component';
import { MainContentComponent } from './main-content/main-content.component';
import { ContactComponent } from './contact/contact.component';
import { HrCommunityComponent } from './hr-community/hr-community.component';
import { CareersComponent } from './careers/careers.component';
import { CertificateProgramComponent } from './servis/certificate-program/certificate-program.component';
import { EventOrgComponent } from './servis/event-org/event-org.component';
import { HrMeetupsComponent } from './servis/hr-meetups/hr-meetups.component';
import { SoftwareDevComponent } from './software-dev/software-dev.component';
import { SoftTrainingComponent } from './soft-training/soft-training.component';
import { FaqComponent } from './faq/faq.component';
import { CorpTrainingComponent } from './servis/corp-training/corp-training.component';
import { PayrollComponent } from './servis/payroll/payroll.component';
import { EndEndComponent } from './servis/end-end/end-end.component';
import { ContactFormComponent } from './contact-form/contact-form.component';
import { CampusRecuitmentComponent } from './servis/campus-recuitment/campus-recuitment.component';
import { StewardshipComponent } from './servis/stewardship/stewardship.component';
import { CareerCounsellingComponent } from './servis/career-counselling/career-counselling.component';
import { DigitalMarketingComponent } from './servis/digital-marketing/digital-marketing.component';
import { ClientsComponent } from './clients/clients.component';

const routes: Routes = [
  {path:'',component:MainContentComponent},
  {path:'services',component:ServicesComponent},
  {path:'about',component:AboutComponent},
  {path:'r-form',component:RFormComponent},
  {path:'contact',component:ContactComponent},
  {path:'hr-community',component:HrCommunityComponent},
  {path:'careers',component:CareersComponent},
  {path:'certificate',component:CertificateProgramComponent},
  {path:'event',component:EventOrgComponent},
  {path:'hr-meet',component:HrMeetupsComponent},
  {path:'soft-dev',component:SoftwareDevComponent},
  {path:'soft-training',component:SoftTrainingComponent},
  {path:'faq',component:FaqComponent},
  {path:'corp-training',component:CorpTrainingComponent},
  {path:'payroll',component:PayrollComponent},
  {path:'end-end',component:EndEndComponent},
  {path:'campus',component:CampusRecuitmentComponent},
  {path:'Stewardship',component:StewardshipComponent},
  {path:'career-counselling',component:CareerCounsellingComponent},
  {path:'dm',component:DigitalMarketingComponent},
  {path:'clients',component:ClientsComponent},

  {path:'contact-form',component:ContactFormComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
