import { Component, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { Routes, RouterModule } from '@angular/router';
// import { ElearningSchoolComponent } from './components/pages/elearning-school/elearning-school.component';
import { VendorCertificationEtrainingComponent } from './components/pages/vendor-certification-etraining/vendor-certification-etraining.component';
import { OnlineTrainingSchoolComponent } from './components/pages/online-training-school/online-training-school.component';
import { DistanceLearningComponent } from './components/pages/distance-learning/distance-learning.component';
import { LanguageSchoolComponent } from './components/pages/language-school/language-school.component';
import { ModernSchoolingComponent } from './components/pages/modern-schooling/modern-schooling.component';
import { YogaTrainingComponent } from './components/pages/yoga-training/yoga-training.component';
import { HealthCoachingComponent } from './components/pages/health-coaching/health-coaching.component';
import { KindergartenComponent } from './components/pages/kindergarten/kindergarten.component';
// import { ContactUsComponent }from './components/pages/contact-us/contact-us.component';
// import { GalleryComponent }  from './components/pages/gallery/gallery.component';
// import { AboutStyleOneComponent } from './components/pages/about-style-one/about-style-one.component';
import { AboutStyleTwoComponent } from './components/pages/about-style-two/about-style-two.component';
import { AboutStyleThreeComponent } from './components/pages/about-style-three/about-style-three.component';
import { AboutStyleFourComponent } from './components/pages/about-style-four/about-style-four.component';
import { SuccessStoryComponent } from './components/pages/success-story/success-story.component';
import { TeacherComponent } from './components/pages/teacher/teacher.component';
import { ProfileAuthenticationComponent } from './components/pages/profile-authentication/profile-authentication.component';
import { ErrorComponent } from './components/pages/error/error.component';
import { ComingSoonComponent } from './components/pages/coming-soon/coming-soon.component';
import { PurchaseGuideComponent } from './components/pages/purchase-guide/purchase-guide.component';
import { PrivacyPolicyComponent } from './components/pages/privacy-policy/privacy-policy.component';
import { TermsOfServiceComponent } from './components/pages/terms-of-service/terms-of-service.component';
import { FaqComponent } from './components/pages/faq/faq.component';
// import { CoursesStyleOneComponent } from './components/pages/courses-style-one/courses-style-one.component';
import { CoursesStyleTwoComponent } from './components/pages/courses-style-two/courses-style-two.component';
import { CoursesStyleThreeComponent } from './components/pages/courses-style-three/courses-style-three.component';
import { CoursesStyleFourComponent } from './components/pages/courses-style-four/courses-style-four.component';
import { CoursesStyleFiveComponent } from './components/pages/courses-style-five/courses-style-five.component';
import { CoursesStyleSixComponent } from './components/pages/courses-style-six/courses-style-six.component';
import { CoursesStyleSevenComponent } from './components/pages/courses-style-seven/courses-style-seven.component';
import { CoursesDetailsStyleOneComponent } from './components/pages/courses-details-style-one/courses-details-style-one.component';
import { CoursesDetailsStyleTwoComponent } from './components/pages/courses-details-style-two/courses-details-style-two.component';
import { ProfileComponent } from './components/pages/profile/profile.component';
import { ProfileQuizComponent } from './components/pages/profile-quiz/profile-quiz.component';
import { MembershipLevelsComponent } from './components/pages/membership-levels/membership-levels.component';
import { BecomeATeacherComponent } from './components/pages/become-a-teacher/become-a-teacher.component';
import { CategoriesComponent } from './components/pages/categories/categories.component';
import { EventsComponent } from './components/pages/events/events.component';
import { EventsDetailsComponent } from './components/pages/events-details/events-details.component';
import { ProductsListStyleOneComponent } from './components/pages/products-list-style-one/products-list-style-one.component';
import { ProductsListStyleTwoComponent } from './components/pages/products-list-style-two/products-list-style-two.component';
import { CartComponent } from './components/pages/cart/cart.component';
import { CheckoutComponent } from './components/pages/checkout/checkout.component';
import { ProductsDetailsComponent } from './components/pages/products-details/products-details.component';
import { BlogStyleOneComponent } from './components/pages/blog-style-one/blog-style-one.component';
import { BlogStyleTwoComponent } from './components/pages/blog-style-two/blog-style-two.component';
import { BlogStyleThreeComponent } from './components/pages/blog-style-three/blog-style-three.component';
import { BlogStyleFourComponent } from './components/pages/blog-style-four/blog-style-four.component';
import { BlogStyleFiveComponent } from './components/pages/blog-style-five/blog-style-five.component';
import { BlogDetailsStyleOneComponent } from './components/pages/blog-details-style-one/blog-details-style-one.component';
import { BlogDetailsStyleTwoComponent } from './components/pages/blog-details-style-two/blog-details-style-two.component';
import { BlogDetailsStyleThreeComponent } from './components/pages/blog-details-style-three/blog-details-style-three.component';
import { GymCoachingComponent } from './components/pages/gym-coaching/gym-coaching.component';
import { LearningManagementComponent } from './components/pages/learning-management/learning-management.component';
import { ReactjsComponent } from './components/pages/single-course/reactjs/reactjs.component';
import { HvacComponent } from './components/pages/single-course/hvac/hvac.component';
import { ThreedsmaxComponent } from './components/pages/single-course/threedsmax/threedsmax.component';
import { FullstackpythonComponent } from './components/pages/single-course/fullstackpython/fullstackpython.component';
import { StaadproComponent } from './components/pages/single-course/staadpro/staadpro.component';
import { PrimaveraComponent } from './components/pages/single-course/primavera/primavera.component';
import { FullstackjavaComponent } from './components/pages/single-course/fullstackjava/fullstackjava.component';
import { RevitstructureComponent } from './components/pages/single-course/revitstructure/revitstructure.component';
import { ManualtestingComponent } from './components/pages/single-course/manualtesting/manualtesting.component';
import { ArtificialIntelligenceComponent } from './components/pages/single-course/artificial-intelligence/artificial-intelligence.component';
import { BimComponent } from './components/pages/single-course/bim/bim.component';
import { SketchingComponent } from './components/pages/single-course/sketching/sketching.component';
import { DevopsComponent } from './components/pages/single-course/devops/devops.component';
import { RevitMepComponent } from './components/pages/single-course/revit-mep/revit-mep.component';
import { CplusplusComponent } from './components/pages/single-course/cplusplus/cplusplus.component';
import { CLanguageComponent } from './components/pages/single-course/c-language/c-language.component';
import { PythonComponent } from './components/pages/single-course/python/python.component';
import { AutoCADComponent } from './components/pages/single-course/auto-cad/auto-cad.component';
import { RevitComponent } from './components/pages/single-course/revit/revit.component';
import { SqlComponent } from './components/pages/single-course/sql/sql.component';
import { PowerBIComponent } from './components/pages/single-course/power-bi/power-bi.component';
import { TableauComponent } from './components/pages/single-course/tableau/tableau.component';
import { BusinessAnalyticsComponent } from './components/pages/single-course/business-analytics/business-analytics.component';
import { IeltsComponent } from './components/pages/single-course/ielts/ielts.component';
import { AdvanceExcelComponent } from './components/pages/single-course/advance-excel/advance-excel.component';
import { SalesforceComponent } from './components/pages/single-course/salesforce/salesforce.component';
import { DigitalMarketingComponent } from './components/pages/single-course/digital-marketing/digital-marketing.component';
import { VlsiComponent } from './components/pages/single-course/vlsi/vlsi.component';
import { AwsComponent } from './components/pages/single-course/aws/aws.component';
import { DataAnalyticsComponent } from './components/pages/single-course/data-analytics/data-analytics.component';
import { DataScienceComponent } from './components/pages/single-course/data-science/data-science.component';
import { SingleCourseSidebarComponent } from './components/common/single-course-sidebar/single-course-sidebar.component';
import { StudentJourneyComponent } from './components/common/student-journey/student-journey.component';
import { StudentsVideoTestimonalsComponent } from './components/common/students-video-testimonals/students-video-testimonals.component';
import { TopCourseCategoriesComponent } from './components/common/top-course-categories/top-course-categories.component';
import { UpdatesComponent } from './components/common/updates/updates.component';
import { PopularcoursesComponent } from './components/common/popularcourses/popularcourses.component';
import { DsformComponent } from './components/common/dsform/dsform.component';
// import { EnquiryFormComponent } from './components/pages/enquiry-form/enquiry-form.component';
// import { SlpEnuiryFormComponent } from './components/pages/slp-enuiry-form/slp-enuiry-form.component';
import { SlpPgdcaComponent } from './components/pages/slpcourses/slp-pgdca/slp-pgdca.component';
import { SlpDigitalMarketingComponent } from './components/pages/slpcourses/slp-digital-marketing/slp-digital-marketing.component';
import { SlpOverviewFormComponent } from './components/common/slp-overview-form/slp-overview-form.component';
import { PlacementsComponent } from './components/common/placements/placements.component';
import { OurGalleryComponent } from './components/common/our-gallery/our-gallery.component';
import { TestingFormComponent } from './components/common/testing-form/testing-form.component';
// import { TestimonialComponent } from './components/common/testimonial/testimonial.component';
import { StudentsPlacementsComponent } from './components/pages/students-placements/students-placements.component';
import { MediaComponent } from './components/pages/media/media.component';
import { ThankYouComponent } from './components/pages/thank-you/thank-you.component';
import { SlpCoursesComponent } from './components/pages/slp-courses/slp-courses.component';
import { IndemandCoursesComponent } from './components/common/indemand-courses/indemand-courses.component';
import { PopularCoursesComponent } from './components/common/popular-courses/popular-courses.component';
import { FoundationCoursesComponent } from './components/common/foundation-courses/foundation-courses.component';
import { EssentialCoursesComponent } from './components/common/essential-courses/essential-courses.component';
import { WhatsAppFormComponent } from './components/pages/whats-app-form/whats-app-form.component';
import { PgpComponent } from './components/pages/pgp/pgp.component';
import { PreloaderComponent } from './components/common/preloader/preloader.component';
import { ScholarshipProgramComponent } from './components/pages/scholarship-program/scholarship-program.component';
import { SalesforceWebinarComponent } from './components/pages/webinars/salesforce-webinar/salesforce-webinar.component';
import { AwsAndDevopsComponent } from './components/pages/webinars/aws-and-devops/aws-and-devops.component';
import { BimWebinarComponent } from './components/pages/webinars/bim-webinar/bim-webinar.component';
import { FullStackWebinarComponent } from './components/pages/webinars/full-stack-webinar/full-stack-webinar.component';
import { DataScienceWebinarComponent } from './components/pages/webinars/data-science-webinar/data-science-webinar.component';
import { WebinarsListComponent } from './components/common/webinars-list/webinars-list.component';

import { ThankSalesforceComponent } from './components/pages/webinars/thank-you-pages/thank-salesforce/thank-salesforce.component';
import { ThankBimComponent } from './components/pages/webinars/thank-you-pages/thank-bim/thank-bim.component';
import { ThankFullStackComponent } from './components/pages/webinars/thank-you-pages/thank-full-stack/thank-full-stack.component';
import { ThankDigitalMarketingComponent } from './components/pages/webinars/thank-you-pages/thank-digital-marketing/thank-digital-marketing.component';
import { ThankDataScienceComponent } from './components/pages/webinars/thank-you-pages/thank-data-science/thank-data-science.component';
import { ThankAwsDevopsComponent } from './components/pages/webinars/thank-you-pages/thank-aws-devops/thank-aws-devops.component';
import { CoursePageComponent } from './components/pages/course-page/course-page.component';
import { TestingComponent } from './components/pages/single-course/testing/testing.component';
import { DummycourseComponent } from './components/pages/single-course/dummycourse/dummycourse.component';
import { SapficoComponent } from './components/pages/single-course/sapfico/sapfico.component';
import { AwsplusdevopsComponent } from './components/pages/single-course/awsplusdevops/awsplusdevops.component';
import { TestingtoolsComponent } from './components/pages/single-course/testingtools/testingtools.component';
import { SapmaterialmanagementComponent } from './components/pages/single-course/sapmaterialmanagement/sapmaterialmanagement.component';
import { SapproductionplanningComponent } from './components/pages/single-course/sapproductionplanning/sapproductionplanning.component';
import { SapsalesdistributionComponent } from './components/pages/single-course/sapsalesdistribution/sapsalesdistribution.component';
import { AiandmlComponent } from './components/pages/single-course/aiandml/aiandml.component';
import { MultimediaComponent } from './components/pages/single-course/multimedia/multimedia.component';
import { MedicalcodingComponent } from './components/pages/single-course/medicalcoding/medicalcoding.component';
import { MedicalcodingWebinarComponent } from './components/pages/webinars/medicalcoding-webinar/medicalcoding-webinar.component';
import { ThankMedicalCodingComponent } from './components/pages/webinars/thank-you-pages/thank-medical-coding/thank-medical-coding.component';
import { CompanyComponent } from './components/pages/company/company.component';
import { JobdescriptionpageComponent } from './components/pages/jobdescriptionpage/jobdescriptionpage.component';
import { StudentverifypageComponent } from './components/pages/studentverifypage/studentverifypage.component';
import { JobApplicationComponent } from './components/pages/job-application/job-application.component';
import { ThankyoupageComponent } from './components/pages/thankyoupage/thankyoupage.component';
import { NaukriComponent } from './components/pages/naukri/naukri.component';
import { AmeerpetComponent } from './components/pages/branches/ameerpet/ameerpet.component';
import { DilsukhnagarComponent } from './components/pages/branches/dilsukhnagar/dilsukhnagar.component';
import { HitechComponent } from './components/pages/branches/hitech/hitech.component';
import { KukatpallyComponent } from './components/pages/branches/kukatpally/kukatpally.component';
import { SecunderabadComponent } from './components/pages/branches/secunderabad/secunderabad.component';
import { FranchiseComponent } from './components/pages/franchise/franchise.component';
import { NewdigitalmarketingComponent } from './components/pages/newdigitalmarketing/newdigitalmarketing.component';
import { VizagComponent } from './components/pages/branches/vizag/vizag.component';
import { EbookformComponent } from './components/common/ebookform/ebookform.component';
import { FeaturedComponent } from './components/common/featured/featured.component';
import { BranchenquiryformComponent } from './components/pages/branches/branchenquiryform/branchenquiryform.component';
import { BlogcategoriesComponent } from './components/pages/blogcategories/blogcategories.component';
import { PythonguwahatiComponent } from './components/pages/single-course/pythonguwahati/pythonguwahati.component';
import { JavaguwahatiComponent } from './components/pages/single-course/javaguwahati/javaguwahati.component';
import { DatascienceguwahatiComponent } from './components/pages/single-course/datascienceguwahati/datascienceguwahati.component';
import { AwsguwahatiComponent } from './components/pages/single-course/awsguwahati/awsguwahati.component';
import { DigitialmarketingguwahatiComponent } from './components/pages/single-course/digitialmarketingguwahati/digitialmarketingguwahati.component';
import { BimguwahatiComponent } from './components/pages/single-course/bimguwahati/bimguwahati.component';

const routes: Routes = [
  { path: 'courses/iit-guwahati/best-full-stack-python-development-course-training-institute',
    component: PythonguwahatiComponent },
 { path: 'courses/iit-guwahati/best-full-stack-java-development-course-training-institute', 
   component: JavaguwahatiComponent },
 { path: 'courses/iit-guwahati/best-data-science-course-training-institute',
    component: DatascienceguwahatiComponent },
 { path: 'courses/iit-guwahati/best-awsplusdevops-course-training-institute', 
   component: AwsguwahatiComponent },
 { path: 'courses/iit-guwahati/best-digital-marketing-course-training-institute', 
   component: DigitialmarketingguwahatiComponent },
 { path: 'courses/iit-guwahati/best-bim-building-information-modeling-course-training-institute', 
  component: BimguwahatiComponent },
 { path: 'courses/best-staad-pro-civil-engineering-course-training-institute', component: StaadproComponent},
  // {path: '', component: ElearningSchoolComponent},

  {
    path: '',
    loadChildren: () =>
      import(
        './components/pages/elearning-school/elearning-school.module'
      ).then((m) => m.ElearningSchoolModule),
  },
  {
    path: 'about-us',
    loadChildren: () =>
      import('./components/pages/about-style-one/about-style-one.module').then(
        (m) => m.AboutStyleOneModule
      ),
  },
  {
    path: 'testimonals',
    loadChildren: () =>
      import('./components/common/testimonial/testimonial.module').then(
        (m) => m.TestimonialModule
      ),
  },
  {
    path: 'media',
    loadChildren: () =>
      import('./components/pages/media/media.module').then(
        (m) => m.MediaModule
      ),
  },
  {
    path: 'course',
    loadChildren: () =>
      import(
        './components/pages/courses-style-one/courses-style-one.module'
      ).then((m) => m.CoursesStyleOneModule),
  },
  {
    path: 'gallery',
    loadChildren: () =>
      import('./components/pages/gallery/gallery.module').then(
        (m) => m.GalleryModule
      ),
  },
  {
    path: 'contact',
    loadChildren: () =>
      import('./components/pages/contact-us/contact-us.module').then(
        (m) => m.ContactUsModule
      ),
  },
  {
    path: 'enquiry-form',
    loadChildren: () =>
      import('./components/pages/enquiry-form/enquiry-form.module').then(
        (m) => m.EnquiryFormModule
      ),
  },
  // {
  //   path: 'slp-enquiry-form',
  //   loadChildren: () =>
  //     import('./components/pages/slp-enuiry-form/slp-enuiry-form.module').then(
  //       (m) => m.SlpEnuiryFormModule
  //     ),
  // },
  // {
  //   path: 'scholarship-program',
  //   loadChildren: () =>
  //     import(
  //       './components/pages/scholarship-program/scholarship-program.module'
  //     ).then((m) => m.ScholarshipProgramModule),
  // },
  // webinar landing
  {
    path: 'workshops',
    loadChildren: () =>
      import('./components/common/webinars-list/webinars-list.module').then(
        (m) => m.WebinarsListModule
      ),
  },

  {
    path: 'workshop/salesforce',
    loadChildren: () =>
      import(
        './components/pages/webinars/salesforce-webinar/salesforce-webinar.module'
      ).then((m) => m.SalesforceWebinarModule),
  },
  {
    path: 'workshop/aws-plus-devops',
    loadChildren: () =>
      import(
        './components/pages/webinars/aws-and-devops/aws-and-devops.module'
      ).then((m) => m.AwsAndDevopsModule),
  },
  {
    path: 'workshop/bim',
    loadChildren: () =>
      import('./components/pages/webinars/bim-webinar/bim-webinar.module').then(
        (m) => m.BimWebinarModule
      ),
  },
  {
    path: 'workshop/full-stack',
    loadChildren: () =>
      import(
        './components/pages/webinars/full-stack-webinar/full-stack-webinar.module'
      ).then((m) => m.FullStackWebinarModule),
  },
  {
    path: 'workshop/data-science',
    loadChildren: () =>
      import(
        './components/pages/webinars/data-science-webinar/data-science-webinar.module'
      ).then((m) => m.DataScienceWebinarModule),
  },
  { path: 'privacy-policy', component: PrivacyPolicyComponent },
  { path: 'terms-of-service', component: TermsOfServiceComponent },
  // { path: 'course-page', component: CoursePageComponent },
  // { path: 'preload', component: PreloaderComponent },
  // {
  //   path: 'vendor-certification-etraining',
  //   component: VendorCertificationEtrainingComponent,
  // },
  // { path: 'online-training-school', component: OnlineTrainingSchoolComponent },
  // { path: 'distance-learning', component: DistanceLearningComponent },
  // { path: 'language-school', component: LanguageSchoolComponent },
  // { path: 'modern-schooling', component: ModernSchoolingComponent },
  // { path: 'yoga-training', component: YogaTrainingComponent },
  // { path: 'health-coaching', component: HealthCoachingComponent },
  // { path: 'kindergarten', component: KindergartenComponent },
  // { path: 'gym-coaching', component: GymCoachingComponent },
  // { path: 'learning-management', component: LearningManagementComponent },
  // {path: 'about-us', component: AboutStyleOneComponent},
  // { path: 'about-2', component: AboutStyleTwoComponent },
  // { path: 'about-3', component: AboutStyleThreeComponent },
  // { path: 'about-4', component: AboutStyleFourComponent },
  // { path: 'success-story', component: SuccessStoryComponent },
  // { path: 'teacher', component: TeacherComponent },
  // { path: 'profile-authentication', component: ProfileAuthenticationComponent },
  // { path: 'faq', component: FaqComponent },
  // { path: 'coming-soon', component: ComingSoonComponent },
  // { path: 'purchase-guide', component: PurchaseGuideComponent },

  // { path: 'courses-2', component: CoursesStyleTwoComponent },
  // { path: 'courses-3', component: CoursesStyleThreeComponent },
  // { path: 'courses-4', component: CoursesStyleFourComponent },
  // { path: 'courses-5', component: CoursesStyleFiveComponent },
  // { path: 'courses-6', component: CoursesStyleSixComponent },
  // { path: 'courses-7', component: CoursesStyleSevenComponent },
  // { path: 'single-courses-1', component: CoursesDetailsStyleOneComponent },
  // { path: 'single-courses-2', component: CoursesDetailsStyleTwoComponent },
  // { path: 'profile', component: ProfileComponent },
  // { path: 'profile-quiz', component: ProfileQuizComponent },
  // { path: 'membership-levels', component: MembershipLevelsComponent },
  // { path: 'become-a-teacher', component: BecomeATeacherComponent },
  // { path: 'old-categories', component: CategoriesComponent },
  // { path: 'events', component: EventsComponent },
  // { path: 'single-events', component: EventsDetailsComponent },
  // { path: 'products-list-1', component: ProductsListStyleOneComponent },
  // { path: 'products-list-2', component: ProductsListStyleTwoComponent },
  // { path: 'cart', component: CartComponent },
  // { path: 'checkout', component: CheckoutComponent },
  // { path: 'single-products', component: ProductsDetailsComponent },
  // {path: 'gallery', component: GalleryComponent},
  { path: 'blog-1', component: BlogStyleOneComponent },
  // { path: 'blog-2', component: BlogStyleTwoComponent },
  // { path: 'blog-3', component: BlogStyleThreeComponent },
  // { path: 'blog-4', component: BlogStyleFourComponent },
  // { path: 'blog-5', component: BlogStyleFiveComponent },
  { path: 'single-blog-1/:id', component: BlogDetailsStyleOneComponent },
  // { path: 'single-blog-2', component: BlogDetailsStyleTwoComponent },
  // { path: 'single-blog-3', component: BlogDetailsStyleThreeComponent },
  // {path: 'contact', component: ContactUsComponent},
  // { path: 'courses/react-js', component: ReactjsComponent },
  // { path: 'courses/hvac', component: HvacComponent },
  // { path: 'courses/3ds-max-2', component: ThreedsmaxComponent },
  // { path: 'courses/full-stack-python', component: FullstackpythonComponent },
  // { path: 'courses/staad-pro', component: StaadproComponent },
  // { path: 'courses/primavera', component: PrimaveraComponent },
  // { path: 'courses/full-stack-java', component: FullstackjavaComponent },
  // { path: 'courses/revit-structure', component: RevitstructureComponent },
  // { path: 'courses/manual-testing', component: ManualtestingComponent },
  // {
  //   path: 'courses/artificial-intelligence',
  //   component: ArtificialIntelligenceComponent,
  // },
  // { path: 'courses/bim-course', component: BimComponent },
  // { path: 'courses/sketching', component: SketchingComponent },
  // { path: 'courses/devops', component: DevopsComponent },
  // { path: 'courses/revit-mep', component: RevitMepComponent },
  // { path: 'courses/c', component: CplusplusComponent },
  // { path: 'courses/c-language', component: CLanguageComponent },
  // { path: 'courses/python-developer', component: PythonComponent },
  // { path: 'courses/autocad', component: AutoCADComponent },
  // { path: 'courses/revit', component: RevitComponent },
  // { path: 'courses/sql', component: SqlComponent },
  // { path: 'courses/power-bi', component: PowerBIComponent },
  // { path: 'courses/tableau', component: TableauComponent },
  // { path: 'courses/business-analytics', component: BusinessAnalyticsComponent },
  // { path: 'courses/ielts', component: IeltsComponent },
  // { path: 'courses/advance-excel', component: AdvanceExcelComponent },
  // { path: 'courses/salesforce-course', component: SalesforceComponent },
  // // {path: 'courses/digital-marketing', component: DigitalMarketingComponent},
  // { path: 'courses/aws', component: AwsComponent },
  // { path: 'courses/data-analytics', component: DataAnalyticsComponent },
  // { path: 'courses/data-science', component: DataScienceComponent },
  // { path: 'sidebar', component: SingleCourseSidebarComponent },
  // { path: 'student-journey', component: StudentJourneyComponent },
  // { path: 'student-video-testimonals', component: StudentsVideoTestimonalsComponent},
  // { path: 'categories', component: TopCourseCategoriesComponent },
  // { path: 'updates', component: UpdatesComponent },
  // { path: 'popular-courses', component: PopularcoursesComponent },
  // { path: 'dsform', component: DsformComponent },
  // {path: 'enquiry-form', component: EnquiryFormComponent},
  // {path: 'slp-enquiry-form', component: SlpEnuiryFormComponent},
  // {
  //   path: 'courses/post-graduate-diploma-in-computer-application-pgdca-self-learning-program',
  //   component: SlpPgdcaComponent,
  // },
  // {
  //   path: 'courses/digital-marketing-self-learning-program',
  //   component: SlpDigitalMarketingComponent,
  // },
  { path: 'courses/best-vlsi-course-training-institute-hyderabad', component: VlsiComponent },
  // { path: 'slp-overview-form', component: SlpOverviewFormComponent },
  // { path: 'placements', component: PlacementsComponent },
  // { path: 'our-gallery', component: OurGalleryComponent },
  // { path: 'tesing-from', component: TestingFormComponent },
  // {path: 'testimonals', component: TestimonialComponent},
  // { path: 'students-placements', component: StudentsPlacementsComponent },
  // {path: 'media', component: MediaComponent},
  { path: 'thank-you', component: ThankYouComponent },
  // { path: 'slp-courses', component: SlpCoursesComponent },
  // { path: 'course-category/in-demand', component: IndemandCoursesComponent },
  // { path: 'course-category/popular', component: PopularCoursesComponent },
  // { path: 'course-category/essential', component: FoundationCoursesComponent },
  // { path: 'course-category/foundation', component: EssentialCoursesComponent },
  // { path: 'whatsappform', component: WhatsAppFormComponent },
  // { path: 'post-graduate-program', component: PgpComponent },
  { path: 'workshop/medical-coding', component: MedicalcodingWebinarComponent },
  { path: 'job', component: CompanyComponent },
  { path: 'thankyoupage', component: ThankyoupageComponent },
  { path: 'branch/best-software-training-institute-ameerpet', component: AmeerpetComponent },
  { path: 'branch/best-software-training-institute-dilsukhnagar', component: DilsukhnagarComponent },
  { path: 'branch/best-software-training-institute-hiteccity', component: HitechComponent },
  { path: 'branch/best-software-training-institute-kukatpally', component: KukatpallyComponent },
  { path: 'branch/best-software-training-institute-secunderabad', component: SecunderabadComponent },
  { path: 'branch/best-software-training-institute-visakhapatnam', component: VizagComponent },
  { path: 'branchenquiryform', component: BranchenquiryformComponent },
  { path: 'blogcategory/:category', component: BlogcategoriesComponent },

  { path: 'ebook', component: EbookformComponent },
  { path: 'featuredin', component: FeaturedComponent },

  // {path: '', component: ElearningSchoolComponent},

  {
    path: '',
    loadChildren: () =>
      import(
        './components/pages/elearning-school/elearning-school.module'
      ).then((m) => m.ElearningSchoolModule),
  },
  // {
  //   path: 'about-us',
  //   loadChildren: () =>
  //     import('./components/pages/about-style-one/about-style-one.module').then(
  //       (m) => m.AboutStyleOneModule
  //     ),
  // },
  // {
  //   path: 'testimonals',
  //   loadChildren: () =>
  //     import('./components/common/testimonial/testimonial.module').then(
  //       (m) => m.TestimonialModule
  //     ),
  // },
  // {
  //   path: 'media',
  //   loadChildren: () =>
  //     import('./components/pages/media/media.module').then(
  //       (m) => m.MediaModule
  //     ),
  // },
  {
    path: 'course',
    loadChildren: () =>
      import(
        './components/pages/courses-style-one/courses-style-one.module'
      ).then((m) => m.CoursesStyleOneModule),
  },
  // {
  //   path: 'gallery',
  //   loadChildren: () =>
  //     import('./components/pages/gallery/gallery.module').then(
  //       (m) => m.GalleryModule
  //     ),
  // },
  // {
  //   path: 'contact',
  //   loadChildren: () =>
  //     import('./components/pages/contact-us/contact-us.module').then(
  //       (m) => m.ContactUsModule
  //     ),
  // },
  // {
  //   path: 'enquiry-form',
  //   loadChildren: () =>
  //     import('./components/pages/enquiry-form/enquiry-form.module').then(
  //       (m) => m.EnquiryFormModule
  //     ),
  // },
  // {
  //   path: 'slp-enquiry-form',
  //   loadChildren: () =>
  //     import('./components/pages/slp-enuiry-form/slp-enuiry-form.module').then(
  //       (m) => m.SlpEnuiryFormModule
  //     ),
  // },
  // {
  //   path: 'scholarship-program',
  //   loadChildren: () =>
  //     import(
  //       './components/pages/scholarship-program/scholarship-program.module'
  //     ).then((m) => m.ScholarshipProgramModule),
  // },
  // webinar landing
  {
    path: 'workshops',
    loadChildren: () =>
      import('./components/common/webinars-list/webinars-list.module').then(
        (m) => m.WebinarsListModule
      ),
  },

  {
    path: 'workshop/salesforce',
    loadChildren: () =>
      import(
        './components/pages/webinars/salesforce-webinar/salesforce-webinar.module'
      ).then((m) => m.SalesforceWebinarModule),
  },
  {
    path: 'workshop/aws-plus-devops',
    loadChildren: () =>
      import(
        './components/pages/webinars/aws-and-devops/aws-and-devops.module'
      ).then((m) => m.AwsAndDevopsModule),
  },
  // {
  //   path: 'workshop/medical-coding',
  //   loadChildren: () =>
  //     import(
  //       './components/pages/webinars/medicalcoding-webinar/medicalcoding-webinar.module'
  //     ).then((m) => m.AwsAndDevopsModule),
  // },
  {
    path: 'workshop/bim',
    loadChildren: () =>
      import('./components/pages/webinars/bim-webinar/bim-webinar.module').then(
        (m) => m.BimWebinarModule
      ),
  },
  {
    path: 'workshop/full-stack',
    loadChildren: () =>
      import(
        './components/pages/webinars/full-stack-webinar/full-stack-webinar.module'
      ).then((m) => m.FullStackWebinarModule),
  },
  {
    path: 'workshop/data-science',
    loadChildren: () =>
      import(
        './components/pages/webinars/data-science-webinar/data-science-webinar.module'
      ).then((m) => m.DataScienceWebinarModule),
  },

  // { path: 'course-page', component: CoursePageComponent },
  // { path: 'preload', component: PreloaderComponent },
  // {
  //   path: 'vendor-certification-etraining',
  //   component: VendorCertificationEtrainingComponent,
  // },
  // { path: 'online-training-school', component: OnlineTrainingSchoolComponent },
  // { path: 'distance-learning', component: DistanceLearningComponent },
  // { path: 'language-school', component: LanguageSchoolComponent },
  // { path: 'modern-schooling', component: ModernSchoolingComponent },
  // { path: 'yoga-training', component: YogaTrainingComponent },
  // { path: 'health-coaching', component: HealthCoachingComponent },
  // { path: 'kindergarten', component: KindergartenComponent },
  // { path: 'gym-coaching', component: GymCoachingComponent },
  // { path: 'learning-management', component: LearningManagementComponent },
  // {path: 'about-us', component: AboutStyleOneComponent},
  // { path: 'about-2', component: AboutStyleTwoComponent },
  // { path: 'about-3', component: AboutStyleThreeComponent },
  // { path: 'about-4', component: AboutStyleFourComponent },
  // { path: 'success-story', component: SuccessStoryComponent },
  // { path: 'teacher', component: TeacherComponent },
  // { path: 'profile-authentication', component: ProfileAuthenticationComponent },
  // { path: 'faq', component: FaqComponent },
  // { path: 'coming-soon', component: ComingSoonComponent },
  // { path: 'purchase-guide', component: PurchaseGuideComponent },
  // { path: 'privacy-policy', component: PrivacyPolicyComponent },
  { path: 'terms-of-service', component: TermsOfServiceComponent },
  // {path: 'course', component: CoursesStyleOneComponent},
  // { path: 'courses-2', component: CoursesStyleTwoComponent },
  // { path: 'courses-3', component: CoursesStyleThreeComponent },
  // { path: 'courses-4', component: CoursesStyleFourComponent },
  // { path: 'courses-5', component: CoursesStyleFiveComponent },
  // { path: 'courses-6', component: CoursesStyleSixComponent },
  // { path: 'courses-7', component: CoursesStyleSevenComponent },
  // { path: 'single-courses-1', component: CoursesDetailsStyleOneComponent },
  // { path: 'single-courses-2', component: CoursesDetailsStyleTwoComponent },
  // { path: 'profile', component: ProfileComponent },
  // { path: 'profile-quiz', component: ProfileQuizComponent },
  // { path: 'membership-levels', component: MembershipLevelsComponent },
  // { path: 'become-a-teacher', component: BecomeATeacherComponent },
  // { path: 'old-categories', component: CategoriesComponent },
  // { path: 'events', component: EventsComponent },
  // { path: 'single-events', component: EventsDetailsComponent },
  // { path: 'products-list-1', component: ProductsListStyleOneComponent },
  // { path: 'products-list-2', component: ProductsListStyleTwoComponent },
  // { path: 'cart', component: CartComponent },
  // { path: 'checkout', component: CheckoutComponent },
  // { path: 'single-products', component: ProductsDetailsComponent },
  // {path: 'gallery', component: GalleryComponent},
  { path: 'blogs', component: BlogStyleOneComponent },
  // { path: 'blog-2', component: BlogStyleTwoComponent },
  // { path: 'blog-3', component: BlogStyleThreeComponent },
  // { path: 'blog-4', component: BlogStyleFourComponent },
  // { path: 'blog-5', component: BlogStyleFiveComponent },
  { path: 'single-blog-1/:id', component: BlogDetailsStyleOneComponent },
  // { path: 'single-blog-2', component: BlogDetailsStyleTwoComponent },
  // { path: 'single-blog-3', component: BlogDetailsStyleThreeComponent },
  // {path: 'contact', component: ContactUsComponent},
  // { path: 'courses/react-js', component: ReactjsComponent },
  // { path: 'courses/hvac', component: HvacComponent },
  // { path: 'courses/3ds-max-2', component: ThreedsmaxComponent },
  // { path: 'courses/full-stack-python', component: FullstackpythonComponent },
  // { path: 'courses/staad-pro', component: StaadproComponent },
  // { path: 'courses/primavera', component: PrimaveraComponent },
  // { path: 'courses/full-stack-java', component: FullstackjavaComponent },
  // { path: 'courses/revit-structure', component: RevitstructureComponent },
  // { path: 'courses/manual-testing', component: ManualtestingComponent },

  // {
  //   path: 'courses/artificial-intelligence',
  //   component: ArtificialIntelligenceComponent,
  // },
  // { path: 'courses/bim-course', component: BimComponent },
  // { path: 'courses/sketching', component: SketchingComponent },
  // { path: 'courses/devops', component: DevopsComponent },
  // { path: 'courses/revit-mep', component: RevitMepComponent },
  // { path: 'courses/c', component: CplusplusComponent },
  // { path: 'courses/c-language', component: CLanguageComponent },
  // { path: 'courses/python-developer', component: PythonComponent },
  // { path: 'courses/autocad', component: AutoCADComponent },
  // { path: 'courses/revit', component: RevitComponent },
  // { path: 'courses/sql', component: SqlComponent },
  // { path: 'courses/power-bi', component: PowerBIComponent },
  // { path: 'courses/tableau', component: TableauComponent },
  // { path: 'courses/business-analytics', component: BusinessAnalyticsComponent },
  // { path: 'courses/ielts', component: IeltsComponent },
  // { path: 'courses/advance-excel', component: AdvanceExcelComponent },
  // { path: 'courses/salesforce-course', component: SalesforceComponent },
  // {path: 'courses/digital-marketing', component: DigitalMarketingComponent},
  // { path: 'courses/aws', component: AwsComponent },
  // { path: 'courses/data-analytics', component: DataAnalyticsComponent },
  // { path: 'courses/data-science', component: DataScienceComponent },
  // { path: 'sidebar', component: SingleCourseSidebarComponent },
  // { path: 'student-journey', component: StudentJourneyComponent },
  // {
  //   path: 'student-video-testimonals',
  //   component: StudentsVideoTestimonalsComponent,
  // },
  // { path: 'categories', component: TopCourseCategoriesComponent },
  // { path: 'updates', component: UpdatesComponent },
  // { path: 'popular-courses', component: PopularcoursesComponent },
  // { path: 'dsform', component: DsformComponent },
  // {path: 'enquiry-form', component: EnquiryFormComponent},
  // {path: 'slp-enquiry-form', component: SlpEnuiryFormComponent},
  // {
  //   path: 'courses/post-graduate-diploma-in-computer-application-pgdca-self-learning-program',
  //   component: SlpPgdcaComponent,
  // },
  // {
  //   path: 'courses/digital-marketing-self-learning-program',
  //   component: SlpDigitalMarketingComponent,
  // },
  // { path: 'slp-overview-form', component: SlpOverviewFormComponent },
  // { path: 'placements', component: PlacementsComponent },
  // { path: 'our-gallery', component: OurGalleryComponent },
  // { path: 'tesing-from', component: TestingFormComponent },
  // {path: 'testimonals', component: TestimonialComponent},
  // { path: 'students-placements', component: StudentsPlacementsComponent },
  // {path: 'media', component: MediaComponent},
  { path: 'thank-you', component: ThankYouComponent },
  // { path: 'slp-courses', component: SlpCoursesComponent },
  // { path: 'course-category/in-demand', component: IndemandCoursesComponent },
  // { path: 'course-category/popular', component: PopularCoursesComponent },
  // { path: 'course-category/essential', component: FoundationCoursesComponent },
  // { path: 'course-category/foundation', component: EssentialCoursesComponent },
  // { path: 'whatsappform', component: WhatsAppFormComponent },
  // { path: 'post-graduate-program', component: PgpComponent },
  { path: ':id/:companyName/:jobTitle', component: JobdescriptionpageComponent },
  { path: 'verifyCertificate/:registrationnumber', component: StudentverifypageComponent },
  { path: 'franchise', component: FranchiseComponent },

  {
    path: '',
    loadChildren: () =>
      import(
        './components/pages/elearning-school/elearning-school.module'
      ).then((m) => m.ElearningSchoolModule),
  },
  // {
  //   path: 'about-us',
  //   loadChildren: () =>
  //     import('./components/pages/about-style-one/about-style-one.module').then(
  //       (m) => m.AboutStyleOneModule
  //     ),
  // },
  // {
  //   path: 'testimonals',
  //   loadChildren: () =>
  //     import('./components/common/testimonial/testimonial.module').then(
  //       (m) => m.TestimonialModule
  //     ),
  // },
  // {
  //   path: 'media',
  //   loadChildren: () =>
  //     import('./components/pages/media/media.module').then(
  //       (m) => m.MediaModule
  //     ),
  // },
  {
    path: 'course',
    loadChildren: () =>
      import(
        './components/pages/courses-style-one/courses-style-one.module'
      ).then((m) => m.CoursesStyleOneModule),
  },
  // {
  //   path: 'gallery',
  //   loadChildren: () =>
  //     import('./components/pages/gallery/gallery.module').then(
  //       (m) => m.GalleryModule
  //     ),
  // },
  // {
  //   path: 'contact',
  //   loadChildren: () =>
  //     import('./components/pages/contact-us/contact-us.module').then(
  //       (m) => m.ContactUsModule
  //     ),
  // },
  // {
  //   path: 'enquiry-form',
  //   loadChildren: () =>
  //     import('./components/pages/enquiry-form/enquiry-form.module').then(
  //       (m) => m.EnquiryFormModule
  //     ),
  // },
  // {
  //   path: 'slp-enquiry-form',
  //   loadChildren: () =>
  //     import('./components/pages/slp-enuiry-form/slp-enuiry-form.module').then(
  //       (m) => m.SlpEnuiryFormModule
  //     ),
  // },
  // {
  //   path: 'scholarship-program',
  //   loadChildren: () =>
  //     import(
  //       './components/pages/scholarship-program/scholarship-program.module'
  //     ).then((m) => m.ScholarshipProgramModule),
  // },
  // webinar landing
  {
    path: 'workshops',
    loadChildren: () =>
      import('./components/common/webinars-list/webinars-list.module').then(
        (m) => m.WebinarsListModule
      ),
  },

  {
    path: 'workshop/salesforce',
    loadChildren: () =>
      import(
        './components/pages/webinars/salesforce-webinar/salesforce-webinar.module'
      ).then((m) => m.SalesforceWebinarModule),
  },
  {
    path: 'workshop/aws-plus-devops',
    loadChildren: () =>
      import(
        './components/pages/webinars/aws-and-devops/aws-and-devops.module'
      ).then((m) => m.AwsAndDevopsModule),
  },
  {
    path: 'workshop/bim',
    loadChildren: () =>
      import('./components/pages/webinars/bim-webinar/bim-webinar.module').then(
        (m) => m.BimWebinarModule
      ),
  },
  {
    path: 'workshop/full-stack',
    loadChildren: () =>
      import(
        './components/pages/webinars/full-stack-webinar/full-stack-webinar.module'
      ).then((m) => m.FullStackWebinarModule),
  },
  {
    path: 'workshop/data-science',
    loadChildren: () =>
      import(
        './components/pages/webinars/data-science-webinar/data-science-webinar.module'
      ).then((m) => m.DataScienceWebinarModule),
  },

  // { path: 'course-page', component: CoursePageComponent },
  // { path: 'preload', component: PreloaderComponent },
  // {
  //   path: 'vendor-certification-etraining',
  //   component: VendorCertificationEtrainingComponent,
  // },
  // { path: 'online-training-school', component: OnlineTrainingSchoolComponent },
  // { path: 'distance-learning', component: DistanceLearningComponent },
  // { path: 'language-school', component: LanguageSchoolComponent },
  // { path: 'modern-schooling', component: ModernSchoolingComponent },
  // { path: 'yoga-training', component: YogaTrainingComponent },
  // { path: 'health-coaching', component: HealthCoachingComponent },
  // { path: 'kindergarten', component: KindergartenComponent },
  // { path: 'gym-coaching', component: GymCoachingComponent },
  // { path: 'learning-management', component: LearningManagementComponent },
  // {path: 'about-us', component: AboutStyleOneComponent},
  // { path: 'about-2', component: AboutStyleTwoComponent },
  // { path: 'about-3', component: AboutStyleThreeComponent },
  // { path: 'about-4', component: AboutStyleFourComponent },
  // { path: 'success-story', component: SuccessStoryComponent },
  // { path: 'teacher', component: TeacherComponent },
  // { path: 'profile-authentication', component: ProfileAuthenticationComponent },
  // { path: 'faq', component: FaqComponent },
  // { path: 'coming-soon', component: ComingSoonComponent },
  // { path: 'purchase-guide', component: PurchaseGuideComponent },
  // { path: 'privacy-policy', component: PrivacyPolicyComponent },
  { path: 'terms-of-service', component: TermsOfServiceComponent },
  // { path: 'courses-2', component: CoursesStyleTwoComponent },
  // { path: 'courses-3', component: CoursesStyleThreeComponent },
  // { path: 'courses-4', component: CoursesStyleFourComponent },
  // { path: 'courses-5', component: CoursesStyleFiveComponent },
  // { path: 'courses-6', component: CoursesStyleSixComponent },
  // { path: 'courses-7', component: CoursesStyleSevenComponent },
  // { path: 'single-courses-1', component: CoursesDetailsStyleOneComponent },
  // { path: 'single-courses-2', component: CoursesDetailsStyleTwoComponent },
  // { path: 'profile', component: ProfileComponent },
  // { path: 'profile-quiz', component: ProfileQuizComponent },
  // { path: 'membership-levels', component: MembershipLevelsComponent },
  // { path: 'become-a-teacher', component: BecomeATeacherComponent },
  // { path: 'old-categories', component: CategoriesComponent },
  // { path: 'events', component: EventsComponent },
  // { path: 'single-events', component: EventsDetailsComponent },
  // { path: 'products-list-1', component: ProductsListStyleOneComponent },
  // { path: 'products-list-2', component: ProductsListStyleTwoComponent },
  // { path: 'cart', component: CartComponent },
  // { path: 'checkout', component: CheckoutComponent },
  // { path: 'single-products', component: ProductsDetailsComponent },
  // {path: 'gallery', component: GalleryComponent},
  { path: 'blog-1', component: BlogStyleOneComponent },
  // { path: 'blog-2', component: BlogStyleTwoComponent },
  // { path: 'blog-3', component: BlogStyleThreeComponent },
  // { path: 'blog-4', component: BlogStyleFourComponent },
  // { path: 'blog-5', component: BlogStyleFiveComponent },
  { path: 'single-blog-1', component: BlogDetailsStyleOneComponent },
  // { path: 'single-blog-2', component: BlogDetailsStyleTwoComponent },
  // { path: 'single-blog-3', component: BlogDetailsStyleThreeComponent },
  // {path: 'contact', component: ContactUsComponent},
  // { path: 'courses/react-js', component: ReactjsComponent },
  // { path: 'courses/hvac', component: HvacComponent },
  // { path: 'courses/3ds-max-2', component: ThreedsmaxComponent },
  // { path: 'courses/full-stack-python', component: FullstackpythonComponent },
  // { path: 'courses/staad-pro', component: StaadproComponent },
  // { path: 'courses/primavera', component: PrimaveraComponent },
  // { path: 'courses/full-stack-java', component: FullstackjavaComponent },
  // { path: 'courses/revit-structure', component: RevitstructureComponent },
  // { path: 'courses/manual-testing', component: ManualtestingComponent },
  // {
  //   path: 'courses/artificial-intelligence',
  //   component: ArtificialIntelligenceComponent,
  // },
  // { path: 'courses/bim-course', component: BimComponent },
  // { path: 'courses/sketching', component: SketchingComponent },
  // { path: 'courses/devops', component: DevopsComponent },
  // { path: 'courses/revit-mep', component: RevitMepComponent },
  // { path: 'courses/c', component: CplusplusComponent },
  // { path: 'courses/c-language', component: CLanguageComponent },
  // { path: 'courses/python-developer', component: PythonComponent },
  // { path: 'courses/autocad', component: AutoCADComponent },
  // { path: 'courses/revit', component: RevitComponent },
  // { path: 'courses/sql', component: SqlComponent },
  // { path: 'courses/power-bi', component: PowerBIComponent },
  // { path: 'courses/tableau', component: TableauComponent },
  // { path: 'courses/business-analytics', component: BusinessAnalyticsComponent },
  // { path: 'courses/ielts', component: IeltsComponent },
  // { path: 'courses/advance-excel', component: AdvanceExcelComponent },
  // { path: 'courses/salesforce-course', component: SalesforceComponent },
  // { path: 'courses/digital-marketing', component: DigitalMarketingComponent },
  // { path: 'courses/aws', component: AwsComponent },
  // { path: 'courses/data-analytics', component: DataAnalyticsComponent },
  // { path: 'courses/data-science', component: DataScienceComponent },


  // New URLS FOR COURSEs

  // 39 courses start here 
  { path: 'courses/best-hvac-training-institute', component: HvacComponent },
  {
    path: 'courses/best-3ds-max-course-training-institute',
    component: ThreedsmaxComponent,
  },
  {
    path: 'courses/best-digital-marketing-course-training-institute',
    component: DigitalMarketingComponent,
  },
  {
    path: 'courses/best-full-stack-python-development-course-training-institute',
    component: FullstackpythonComponent,
  },

  {
    path: 'courses/best-primavera-p6-course-training-institute',
    component: PrimaveraComponent,
  },
  {
    path: 'courses/best-full-stack-java-development-course-training-institute',
    component: FullstackjavaComponent,
  },
  // {
  //   path: 'courses/best-manual-testing-software-testing-course-training-institute',
  //   component: ManualtestingComponent,
  // },
  {
    path: 'courses/best-artificial-intelligence-best-ai-course-training-institute',
    component: ArtificialIntelligenceComponent,
  },
  {
    path: 'courses/best-bim-building-information-modeling-course-training-institute',
    component: BimComponent,
  },
  {
    path: 'courses/best-sketching-course-training-institute',
    component: SketchingComponent,
  },
  {
    path: 'courses/best-devops-course-training-institute',
    component: DevopsComponent,
  },
  {
    path: 'courses/best-revit-mep-course-training-institute',
    component: RevitMepComponent,
  },
  {
    path: 'courses/best-c-language-course-training-institute',
    component: CLanguageComponent,
  },
  {
    path: 'courses/best-python-developer-programming-course-training-institute',
    component: PythonComponent,
  },
  {
    path: 'courses/best-autocad-course-training-institute',
    component: AutoCADComponent,
  },
  {
    path: 'courses/best-revit-course-training-institute',
    component: RevitComponent,
  },
  {
    path: 'courses/best-sql-course-training-institute',
    component: SqlComponent,
  },
  {
    path: 'courses/best-power-bi-course-training-institute',
    component: PowerBIComponent,
  },
  {
    path: 'courses/best-tableau-course-training-institute',
    component: TableauComponent,
  },
  {
    path: 'courses/best-business-analytics-course-training-institute',
    component: BusinessAnalyticsComponent,
  },
  {
    path: 'courses/best-ielts-course-training-institute',
    component: IeltsComponent,
  },
  {
    path: 'courses/best-advance-excel-course-training-institute',
    component: AdvanceExcelComponent,
  },
  {
    path: 'courses/best-salesforce-admin-development-course-training-institute',
    component: SalesforceComponent,
  },
  {
    path: 'courses/best-aws-amazon-web-services-course-training-institute',
    component: AwsComponent,
  },
  {
    path: 'courses/best-data-analytics-course-training-institute',
    component: DataAnalyticsComponent,
  },
  {
    path: 'courses/best-data-science-course-training-institute',
    component: DataScienceComponent,
  },
  {
    path: 'courses/best-revit-structure-course-training-institute',
    component: RevitstructureComponent,
  },
  {
    path: 'courses/best-c++-course-training-institute',
    component: CplusplusComponent,
  },
  {
    path: 'courses/best-react-course-training-institute',
    component: ReactjsComponent,
  },

  {
    path: 'courses/best-awsplusdevops-course-training-institute',
    component: AwsplusdevopsComponent,
  },
  {
    path: 'courses/best-testingtools-course-training-institute',
    component: TestingtoolsComponent,
  },

  {
    path: 'courses/best-sap-mm-meterial-management-course-training-institute',
    component: SapmaterialmanagementComponent,
  },
  {
    path: 'courses/best-sap-pp-production-planning-course-training-institute',
    component: SapproductionplanningComponent,
  },
  {
    path: 'courses/best-sap-sd-sales-and-distribution-course-training-institute',
    component: SapsalesdistributionComponent,
  },
  {
    path: 'courses/best-sap-fico-finance-and-controlling-course-training-institute',
    component: SapficoComponent,
  },
  {
    path: 'courses/best-ai-and-ml-course-training-institute',
    component: AiandmlComponent,
  },
  {
    path: 'courses/best-multimedia-course-training-institute',
    component: MultimediaComponent,
  },

  {
    path: 'courses/best-medical-coding-course-training-institute',
    component: MedicalcodingComponent,
  },

  // 39 courses end here
  { path: 'student-video-testimonals', component: StudentsVideoTestimonalsComponent },
  { path: 'thank-you', component: ThankYouComponent },
  { path: 'jobapplication', component: JobApplicationComponent },
  { path: 'jobs', component: NaukriComponent },





  // shivaji and srilaskhmi 10 dec changing the urls

  // { path: 'updates', component: UpdatesComponent },
  // { path: 'single-course-sidebarform', component: SingleCourseSidebarComponent,},
  // { path: 'student-journey', component: StudentJourneyComponent },
  // { path: 'categories', component: TopCourseCategoriesComponent },
  // { path: 'popular-courses', component: PopularcoursesComponent },
  // { path: 'dsform', component: DsformComponent },
  // {path: 'enquiry-form', component: EnquiryFormComponent},
  // {path: 'slp-enquiry-form', component: SlpEnuiryFormComponent},
  // { path: 'courses/digital-marketing-self-learning-program', component: SlpDigitalMarketingComponent },
  // { path: 'slp-overview-form', component: SlpOverviewFormComponent },
  // { path: 'placements', component: PlacementsComponent },
  // { path: 'our-gallery', component: OurGalleryComponent },
  // { path: 'tesing-from', component: TestingFormComponent },
  // {path: 'testimonals', component: TestimonialComponent},
  // { path: 'students-placements', component: StudentsPlacementsComponent },
  // {path: 'media', component: MediaComponent},
  // { path: 'slp-courses', component: SlpCoursesComponent },
  // { path: 'course-category/in-demand', component: IndemandCoursesComponent },
  // { path: 'course-category/popular', component: PopularCoursesComponent },
  // { path: 'course-category/essential', component: FoundationCoursesComponent },
  // { path: 'course-category/foundation', component: EssentialCoursesComponent },
  // { path: 'whatsappform', component: WhatsAppFormComponent },
  // { path: 'post-graduate-program', component: PgpComponent },

  // thankyou pages
  { path: 'thankyou-salesforce', component: ThankSalesforceComponent },
  { path: 'thankyou-bim', component: ThankBimComponent },
  { path: 'thankyou-full-stack', component: ThankFullStackComponent },
  {
    path: 'thankyou-digital-marketing',
    component: ThankDigitalMarketingComponent,
  },
  { path: 'thankyou-data-science', component: ThankDataScienceComponent },
  { path: 'thankyou-awsplusdevops', component: ThankAwsDevopsComponent },
  { path: 'thankyou-medicalcoding', component: ThankMedicalCodingComponent },
  // { path: 'testing', component: TestingComponent },
  // {path:'newdigitalmarketing', component:NewdigitalmarketingComponent},
  // Here add new pages component
  // { path: 'dummy-page', component: DummycourseComponent },

  { path: '**', component: ErrorComponent },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {}),
    BrowserModule,
    HttpClientModule

  ],
  exports: [RouterModule],
})
export class AppRoutingModule { }
