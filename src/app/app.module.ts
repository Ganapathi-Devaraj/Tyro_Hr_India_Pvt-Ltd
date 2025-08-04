import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule} from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { SlideshareComponent } from './slideshare/slideshare.component';
import { AboutComponent } from './about/about.component';
import { FooterComponent } from './footer/footer.component';
import { ServicesComponent } from './services/services.component';
import { RFormComponent } from './r-form/r-form.component';
import { MainContentComponent } from './main-content/main-content.component';
import { ContactComponent } from './contact/contact.component';
import { HrCommunityComponent } from './hr-community/hr-community.component';
import { CareersComponent } from './careers/careers.component';
import { CertificateProgramComponent } from './servis/certificate-program/certificate-program.component';
import { EventOrgComponent } from './servis/event-org/event-org.component';
import { HrMeetupsComponent } from './servis/hr-meetups/hr-meetups.component';
import { AnnouncementComponent } from './announcement/announcement.component';
import { SoftwareDevComponent } from './software-dev/software-dev.component';
import { SoftTrainingComponent } from './soft-training/soft-training.component';
import { OurProjectsComponent } from './software-dev/our-projects/our-projects.component';
import { FaqComponent } from './faq/faq.component';
import { CorpTrainingComponent } from './servis/corp-training/corp-training.component';
import { BotComponent } from './bot/bot.component';
import { PayrollComponent } from './servis/payroll/payroll.component';
import { EndEndComponent } from './servis/end-end/end-end.component';
import { ContactFormComponent } from './contact-form/contact-form.component';
import { CampusRecuitmentComponent } from './servis/campus-recuitment/campus-recuitment.component';
import { StewardshipComponent } from './servis/stewardship/stewardship.component';
import { ClientsComponent } from './clients/clients.component';
import { CareerCounsellingComponent } from './servis/career-counselling/career-counselling.component';
import { DigitalMarketingComponent } from './servis/digital-marketing/digital-marketing.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    SlideshareComponent,
    AboutComponent,
    FooterComponent,
    ServicesComponent,
    RFormComponent,
    MainContentComponent,
    ContactComponent,
    HrCommunityComponent,
    CareersComponent,
    CertificateProgramComponent,
    EventOrgComponent,
    HrMeetupsComponent,
    AnnouncementComponent,
    SoftwareDevComponent,
    SoftTrainingComponent,
    OurProjectsComponent,
    FaqComponent,
    CorpTrainingComponent,
    BotComponent,
    PayrollComponent,
    EndEndComponent,
    ContactFormComponent,
    CampusRecuitmentComponent,
    StewardshipComponent,
    ClientsComponent,
    CareerCounsellingComponent,
    DigitalMarketingComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
