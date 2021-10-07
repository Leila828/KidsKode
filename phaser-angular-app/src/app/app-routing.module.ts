import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { CourseListComponent } from "./course-list/course-list.component";
import { EmployeeListComponent } from "./employee/employee-list/employee-list.component";
import { BlocklyComponent } from "./blockly/blockly.component";
import { LevelDetailsComponent } from "./level-details/level-details.component";
import { Game2Component } from "./game2/game2.component";
import { RegisterComponent } from "./register/register.component";
import { ParentComponent } from "./parent/parent.component";
import { ChildComponent } from "./child/child.component";
import { GameComponent } from "./game/game.component";
import { LearningComponent } from "./learning/learning.component";
import { AuthgardGuard } from "./authgard.guard";
import { HomeComponent } from "./home/home.component";
import { RessetpasswordfinalComponent } from "./ressetpasswordfinal/ressetpasswordfinal.component";
import { LoginComponent } from "./login/login.component";
import { TestComponent } from "./test/test.component";
import { RessetpasswordComponent } from "./ressetpassword/ressetpassword.component";
import { ProfileComponent } from "./profile/profile.component";
import { BoardUserComponent } from "./board-user/board-user.component";

import { CoursesComponent } from "./courses/courses.component";

import { DashboardParentComponent } from "./dashboard-parent/dashboard-parent.component";
import { DashboardChildComponent } from "./dashboard-child/dashboard-child.component";
import { LevelsComponent } from "./levels/levels.component";
import { Level2DetailsComponent } from "./level2-details/level2-details.component";
import { LeaderboardComponent } from "./leaderboard/leaderboard.component";
import { SequencingComponent } from "./sequencing/sequencing.component";
import { BlocklyRepeatComponent } from "./blockly-repeat/blockly-repeat.component";
import { BlocklyConditionComponent } from "./blockly-condition/blockly-condition.component";
import { Level1readmoreComponent } from "./level1readmore/level1readmore.component";
import { Level2readmoreComponent } from "./level2readmore/level2readmore.component";
import {AcceuilComponent} from './acceuil/acceuil.component';

import {BoardAdminComponent} from './board-admin/board-admin.component';
import {PaymentListComponent} from './payment-list/payment-list.component';
import {UserListComponent} from './user-list/user-list.component';
import {AgerestrictionComponent} from './agerestriction/agerestriction.component';

const routes: Routes = [
  {
    path: "junior",
    component: Level1readmoreComponent,
  },
  {
    path: "midlevel",
    component: Level2readmoreComponent,
  },
  {
    path: "course",
    component: CourseListComponent,
  },

  {
    path: "levelDetails",
    component: LevelDetailsComponent,
  },
  {
    path: "levels",
    component: LevelsComponent,
  },
  {
    path: "sequencing",
    component: SequencingComponent,
  },
  {
    path: "blocklysequencing",
    component: BlocklyComponent,
  },

  {
    path: "blocklyloop",
    component: BlocklyRepeatComponent,
  },
  {
    path: "blocklycondition",
    component: BlocklyConditionComponent,
  },

  {
    path: "levelDetails2",
    component: Level2DetailsComponent,
  },
  {
    path: "leaderboard",
    component: LeaderboardComponent,
  },
  {
    path: "game1",
    component: EmployeeListComponent,
  },
  {
    path: "loop",
    component: Game2Component,
  },
  {
    path: "game2",
    component: BlocklyComponent,
  },
  {
    path: "register",
    component: RegisterComponent,
  },
  { path: "register/child", component: ChildComponent },

  { path: "register/parent", component: ParentComponent },
  { path: "games", component: GameComponent },
  {
    path: "learning",
    component: LearningComponent,
  },

  { path: "home", component: HomeComponent },
  { path: "changePassword ", component: RessetpasswordfinalComponent },
  { path: "login", component: LoginComponent },
  { path: "forgetpassword", component: RessetpasswordComponent },
  { path: "resetpass", component: TestComponent },
  { path: "chemin", component: AgerestrictionComponent },

  {
    path: "profile",
    component: ProfileComponent,
    canActivate: [AuthgardGuard],
  },
  { path: "user", component: BoardUserComponent },

  { path: "courses", component: CoursesComponent },

  { path: "Dashboard/admin", component: BoardAdminComponent },
  { path: "Dashboardadmin", component: BoardAdminComponent },
  {
    path: "Dashboard/parent",
    component: DashboardParentComponent,
  },
  {
    path: "UserList",
    component: UserListComponent,
  },
  {
    path: "PaymentList",
    component: PaymentListComponent,
  },
  {
    path: "Dashboardparent",
    component: DashboardParentComponent,
  },
  {
    path: 'cours2',
    component: AcceuilComponent,
  },
  {
    path: 'cours1',
    component: BoardUserComponent,
  },
  {
    path: "Dashboard/child",
    component: DashboardChildComponent,
    canActivate: [AuthgardGuard],
  },{
    path: "Dashboardchild",
    component: DashboardChildComponent,
    canActivate: [AuthgardGuard],
  },

  { path: "", redirectTo: "home", pathMatch: "full" },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { relativeLinkResolution: "legacy" })],
  exports: [RouterModule],
})
export class AppRoutingModule {}
