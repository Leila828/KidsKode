import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {CourseListComponent} from './course-list/course-list.component';
import {EmployeeListComponent} from './employee/employee-list/employee-list.component';
import {BlocklyComponent} from './blockly/blockly.component';
import {LevelDetailsComponent} from './level-details/level-details.component';
import {ChildComponent} from './child/child.component';
import {LoginComponent} from './login/login.component';
import {BoardUserComponent} from './board-user/board-user.component';
import {LevelsComponent} from './levels/levels.component';
import {DashboardChildComponent} from './dashboard-child/dashboard-child.component';
import {HomePageComponent} from './home-page/home-page.component';
import {SequencingComponent} from './sequencing/sequencing.component';
import {Game2Component} from './game2/game2.component';
import {BlocklyRepeatComponent} from './blockly-repeat/blockly-repeat.component';
import {BlocklyConditionComponent} from './blockly-condition/blockly-condition.component';
import {LeaderboardComponent} from './leaderboard/leaderboard.component';



const routes: Routes = [
  {
    path: '',
    component: LoginComponent },
  {
    path: 'home',
    component: HomePageComponent },  {
    path: 'course',
    component: CourseListComponent
  },
  {
    path: 'aicha',
    component: Game2Component,
  },
  {
    path: "leaderboard",
    component: LeaderboardComponent,
  },
  {
    path: 'sequencing',
    component: SequencingComponent,
  },
  { path: 'Dashboard', component: EmployeeListComponent },

  { path: 'child', component: ChildComponent },
  { path: 'lead', component: LeaderboardComponent },

  { path: 'login', component: LoginComponent },
  { path: 'user', component: BoardUserComponent },
  { path: 'Levels', component: LevelsComponent },

  {
    path: 'blocklyloop',
    component: BlocklyRepeatComponent,
  },
  {
    path: 'blocklycondition',
    component: BlocklyConditionComponent,
  },

  {
    path: 'levelDetails',
    component: LevelDetailsComponent
  },
  {
    path: 'game1',
    component: EmployeeListComponent
  },
 {
    path: 'game2',
    component: BlocklyComponent
  },
  { path: "child", component: ChildComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
