import { Component, OnInit, ViewChild } from "@angular/core";
import { UserService } from "../_services/user.service";
import { NavbarService } from "../navbar.service";
import { AuthService } from "../_services/auth.service";
import { Faq } from "../faq";
import { ParentPaymentDetails } from "../parent-payment-details";
import { Level } from "../level";
import { BaseChartDirective } from "ng2-charts";
import { User } from "../user";
import { Parent } from "../parent";
import { Child } from "../child";
import { ParentPayment } from "../parent-payment";

@Component({
  selector: "app-board-admin",
  templateUrl: "./board-admin.component.html",
  styleUrls: ["./board-admin.component.css"],
})
export class BoardAdminComponent implements OnInit {
  @ViewChild(BaseChartDirective) chart: BaseChartDirective;

  content?: string;
  parent?: Parent[];
  child?: Child[];
  faq1: Faq[];
  faq2: Faq[];

  listpayments: ParentPaymentDetails[];
  sure: Boolean = false;
  i: number = 0;
  par: number = 0;
  enf: number = 0;
  userlist: User[];
  niv1: number = 0;
  niv2?: number = 0;
  niv3: number = 0;
  lengt?;
  form: any = {
    question1: null,
    answer1: null,
    level: null,
  };
  constructor(
    private userService: UserService,
    private nav: NavbarService,
    private auth: AuthService,
    private user: UserService
  ) {}

  public pieChartLabels = ["Parent", "Child"];
  public pieChartData = [0, 0];
  public pieChartType = "pie";
  public barChartOptions = {
    scaleShowVerticalLines: false,
    responsive: true,
  }; /*
  public barChartLabels = ["Level1", "Level2", "Level3"];
  public barChartType = "bar";
  public barChartLegend = true;
  public barChartData = [{ data: [75, 49, 89], label: "Paid Courses" }];*/
  async ngOnInit() {
    this.nav.hide();

    this.userlist = await this.getusers();
    console.log(this.userlist);
    this.lengt = this.userlist.length;

    this.parent = await this.getparents();
    console.log(this.parent);
    this.listpayments = await this.paymentd();

    this.child = await this.getchilds();
    this.faq1 = await this.getfaq1();
    this.faq2 = await this.getfaq2();

    console.log(this.faq1);
    console.log(this.child);

    setTimeout(() => {
      this.chart.chart.data.datasets[0].data = [
        this.parent.length,
        this.child.length,
      ];
      this.chart.chart.update();
      this.lengt = this.userlist.length;
    }, 2000);

  }

  onSubmit(): void {
    this.sure = false;
    /*const { question1, answer1, level } = this.form;
    console.log(level);
    console.log(level.values);
    console.log(level.value);*/

    let form = document.getElementsByTagName("form")[0];

    this.auth
      .savafaq(null, form.question1.value, form.answer1.value, form.level.value)
      .subscribe(
        (data) => {
          console.log(data);
        },
        (err) => {
          console.log(err.error.message);
        }
      );
  }
  showform() {
    this.sure = true;
  }

  Cancel() {
    this.sure = false;
  }
  paymentd(): Promise<any> {
    return this.userService.getpaymentList().toPromise();
  }
  getusers(): Promise<User[]> {
    return this.userService.getallusers().toPromise();
  }

  getparents(): Promise<any> {
    return this.userService.getallparents().toPromise();
  }
  getchilds(): Promise<any> {
    return this.userService.getallchilds().toPromise();
  }
  getfaq1(): Promise<Faq[]> {
    return this.userService.getlistfaq1().toPromise();
  }
  getfaq2(): Promise<Faq[]> {
    return this.userService.getlistfaq2().toPromise();
  }
  public chartClicked(e: any): void {}
  public chartHovered(e: any): void {}
}
