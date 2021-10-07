import { BrowserModule } from "@angular/platform-browser";
import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { GameComponent } from "./game/game.component";
import { EmployeeListComponent } from "./employee/employee-list/employee-list.component";

import { BlocklyComponent } from "./blockly/blockly.component";
import { CourseListComponent } from "./course-list/course-list.component";
import { LevelDetailsComponent } from "./level-details/level-details.component";
import { Game2Component } from "./game2/game2.component";
import { ChartsModule } from "ng2-charts";

//////////////////////////////////////
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { HttpClient } from '@angular/common/http';
import { TestblockComponent } from "./testblock/testblock.component";
import { authInterceptorProviders } from "./_helpers/auth.interceptor";
import { LoginComponent } from "./login/login.component";
import { RegisterComponent } from "./register/register.component";
import { HomeComponent } from "./home/home.component";
import { ProfileComponent } from "./profile/profile.component";
import { ChildComponent } from "./child/child.component";
import { ParentComponent } from "./parent/parent.component";
import { RessetpasswordComponent } from "./ressetpassword/ressetpassword.component";
import { RessetpasswordfinalComponent } from "./ressetpasswordfinal/ressetpasswordfinal.component";
import { TestComponent } from "./test/test.component";
import { DashboardParentComponent } from "./dashboard-parent/dashboard-parent.component";
import { DashboardChildComponent } from "./dashboard-child/dashboard-child.component";
import { NavbarComponent } from "./navbar/navbar.component";
import { CoursesComponent } from "./courses/courses.component";


import { BoardUserComponent } from "./board-user/board-user.component";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";
import { LearningComponent } from "./learning/learning.component";
import { AuthgardGuard } from "./authgard.guard";
import { LevelsComponent } from "./levels/levels.component";
import { Level2DetailsComponent } from "./level2-details/level2-details.component";
import { LeaderboardComponent } from "./leaderboard/leaderboard.component";
import { BlocklyConditionComponent } from "./blockly-condition/blockly-condition.component";
import { BlocklyRepeatComponent } from "./blockly-repeat/blockly-repeat.component";
import { SequencingComponent } from "./sequencing/sequencing.component";
import { Level1readmoreComponent } from './level1readmore/level1readmore.component';
import { Level2readmoreComponent } from './level2readmore/level2readmore.component';
import { AcceuilComponent } from './acceuil/acceuil.component';
import { Navbar2Component } from './navbar2/navbar2.component';
import { DashboardAdminComponent } from './dashboard-admin/dashboard-admin.component';
import {BoardAdminComponent} from './board-admin/board-admin.component';
import {UserListComponent} from './user-list/user-list.component';
import {PaymentListComponent} from './payment-list/payment-list.component';
import {CookieService} from 'ngx-cookie-service';
import {AgerestrictionComponent} from './agerestriction/agerestriction.component';

@NgModule({
  declarations: [
    AppComponent,
    AgerestrictionComponent,
    GameComponent,
    EmployeeListComponent,
    BlocklyComponent,
    BlocklyConditionComponent,
    BlocklyRepeatComponent,
    CourseListComponent,
    LevelDetailsComponent,
    Game2Component,
    TestblockComponent,
    LoginComponent,
    RegisterComponent,
    HomeComponent,
    ProfileComponent,
    BoardAdminComponent,

    BoardUserComponent,
    ChildComponent,
    UserListComponent,
    PaymentListComponent,
    ParentComponent,
    RessetpasswordComponent,
    SequencingComponent,
    RessetpasswordfinalComponent,
    TestComponent,
    DashboardParentComponent,
    DashboardChildComponent,
    NavbarComponent,
    CoursesComponent,
    LearningComponent,
    LevelsComponent,
    Level2DetailsComponent,
    LeaderboardComponent,
    Level1readmoreComponent,
    Level2readmoreComponent,
    AcceuilComponent,
    Navbar2Component,
    DashboardAdminComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    ChartsModule,
    HttpClientModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      }
    })

  ],
  providers: [authInterceptorProviders, AuthgardGuard , CookieService],
  bootstrap: [AppComponent],
})
export class AppModule {}
export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}
