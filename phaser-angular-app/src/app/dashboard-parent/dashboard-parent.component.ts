import {Component, Inject, OnInit, ViewChild} from '@angular/core';
import { Router } from "@angular/router";
import { NavbarService } from "../navbar.service";
import { TokenStorageService } from "../_services/token-storage.service";
//import { ChartsModule } from "ng2-charts";
import { Chart } from "chart.js";
import { Parent } from "../parent";
import { AuthService } from "../_services/auth.service";
import { UserService } from "../_services/user.service";
import { Child } from "../child";
import { enfantLearning } from "../enfantLearning";
import { BaseChartDirective } from "ng2-charts";
import {TranslateService} from '@ngx-translate/core';
import {DOCUMENT} from '@angular/common';

@Component({
  selector: "app-dashboard-parent",
  templateUrl: "./dashboard-parent.component.html",
  styleUrls: ["./dashboard-parent.component.css"],
})
export class DashboardParentComponent implements OnInit {
  @ViewChild(BaseChartDirective) chart: BaseChartDirective;

  private roles: string[] = [];
  isLoggedIn = false;
  showAdminBoard = false;
  score3: number = 0;
  showModeratorBoard = false;
  username?: string;
  id_user;
  parent: Parent;
  User?: Parent;
  child?: enfantLearning;
  chartReady: Boolean = false;
  public barChartOptions = {
    scaleShowVerticalLines: false,
    responsive: true,
  };
  public barChartLabels = [
    "Sequencing",
    "loop",
    "blockly_sequencing",
    "blockly_loop",
    "blockly_condition",

    //   "2003",
    // "2004",
    //"2005",
    //"2006",
  ];
  public barChartType = "bar";
  public bar;
  public barChartData: any[] = [
    {
      data: [0, 0, 0, 0, 0],
      label: "Course Progress ",
    },
  ];
  //  public barChartLegend = true;
  constructor(
    private translateService: TranslateService,
    @Inject(DOCUMENT) private document: Document,
    private router: Router,
    public nav: NavbarService,
    private tokenStorageService: TokenStorageService,
    private userauth: UserService
  ) {}

  async ngOnInit() {
    this.nav.hide();
    this.isLoggedIn = !!this.tokenStorageService.getToken();




    const user = this.tokenStorageService.getUser();
    this.roles = user.roles;

    this.showAdminBoard = this.roles.includes("ROLE_ADMIN");
    this.showModeratorBoard = this.roles.includes("ROLE_MODERATOR");

    this.username = user.username;
    this.parent = await this.getparent();
    this.id_user = this.parent.enfant.compte.id;
    this.child = await this.getenfant(this.id_user);
    console.log(this.child);

    setTimeout(() => {
      this.chart.chart.data.datasets[0].data = [
        this.child.points2,
        this.child.points,
        this.child.points_sequencing_blockly,
        this.child.points_loop_blockly,
        this.child.points_condition_blockly,

        100,
      ];
      this.chart.chart.update();
    }, 2000);

    this.chartReady = true;
    if (this.translateService.currentLang =="ar"){
      let htmlTag = this.document.getElementById("hello") ;
      let  user= this.document.getElementById("user") ;
      let dash = this.document.getElementById("dash") ;
      let sidebar = this.document.getElementById("sidebar-wrappe") ;

      this.translateService.currentLang === "ar" ? htmlTag.style.left= "700px" : htmlTag.style.marginLeft="5px"   ;
      this.translateService.currentLang === "ar" ? user.style.left= "400px" : htmlTag.style.marginLeft="5px"   ;
      this.translateService.currentLang === "ar" ? dash.style.left= "100px" : htmlTag.style.marginLeft="5px"   ;
      this.translateService.currentLang === "ar" ? sidebar.style.position= "absolute"   : htmlTag.style.marginLeft="5px"   ;
      this.translateService.currentLang === "ar" ? sidebar.style.right= "0px" : htmlTag.style.marginLeft="5px"   ;



    }
  }
  //   console.log("lage ta3ah :" + this.child.points);

  getparent(): Promise<Parent> {
    return this.tokenStorageService.getinfo().toPromise();
  }
  getenfant(id: string): Promise<enfantLearning> {
    return this.userauth.getenfantlearning(id).toPromise();
  }

  btnClick() {
    this.router.navigate(["/Dashboard/child"]);
  }
  logout(): void {
    if (this.isLoggedIn) {
      this.tokenStorageService.signOut();
      window.location.reload();
    }
  }
  public chartClicked(e: any): void {}
  public chartHovered(e: any): void {}
}
