import { BrowserModule } from '@angular/platform-browser';
import { NgModule, NO_ERRORS_SCHEMA} from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GameComponent } from './game/game.component';
import { EmployeeListComponent } from './employee/employee-list/employee-list.component';


import { BlocklyComponent } from './blockly/blockly.component';
import {CourseListComponent} from './course-list/course-list.component';
import { LevelDetailsComponent } from './level-details/level-details.component';
import {LoginComponent} from './login/login.component';
import {ChildComponent} from './child/child.component';
import {BoardUserComponent} from './board-user/board-user.component';
import {RessetpasswordComponent} from './ressetpassword/ressetpassword.component';
import {RessetpasswordfinalComponent} from './ressetpasswordfinal/ressetpasswordfinal.component';
import {TestComponent} from './test/test.component';
import {DashboardChildComponent} from './dashboard-child/dashboard-child.component';
import {NavbarComponent} from './navbar/navbar.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {authInterceptorProviders} from './_helpers/auth.interceptor';
import {LevelsComponent} from './levels/levels.component';
import {IonicModule, IonicRouteStrategy} from '@ionic/angular';
import {RouteReuseStrategy} from '@angular/router';

import { ScreenOrientation } from '@ionic-native/screen-orientation/ngx';
import { HomePageComponent } from './home-page/home-page.component';
import {SequencingComponent} from './sequencing/sequencing.component';
import {Navbar2Component} from './navbar2/navbar2.component';
import {Game2Component} from './game2/game2.component';
import {BlocklyConditionComponent} from './blockly-condition/blockly-condition.component';
import {BlocklyRepeatComponent} from './blockly-repeat/blockly-repeat.component';
import {LeaderboardComponent} from './leaderboard/leaderboard.component';


@NgModule({
  declarations: [
    AppComponent,
    GameComponent,
    EmployeeListComponent,
    BlocklyComponent,
    CourseListComponent,
    LevelDetailsComponent,
    LoginComponent,
    BoardUserComponent,
    ChildComponent,
    RessetpasswordComponent,
    RessetpasswordfinalComponent,
    TestComponent,
    DashboardChildComponent,
    NavbarComponent,
    GameComponent,
    EmployeeListComponent,
    BlocklyComponent,
    BlocklyConditionComponent,
    BlocklyRepeatComponent,
    CourseListComponent,
    LevelsComponent,
    HomePageComponent,
    SequencingComponent,
    Navbar2Component,
    Game2Component,
    LeaderboardComponent,

  ],
    imports: [
        BrowserModule,
        AppRoutingModule,
      FormsModule,
      HttpClientModule,
      ReactiveFormsModule,
      IonicModule.forRoot()




    ],
  providers: [authInterceptorProviders, ScreenOrientation,
    {
      provide: RouteReuseStrategy,
      useClass: IonicRouteStrategy
    }],
  bootstrap: [AppComponent],


})
export class AppModule { }
