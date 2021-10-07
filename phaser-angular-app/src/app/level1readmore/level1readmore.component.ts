import {Component, Inject, OnInit} from '@angular/core';
import { UserService } from "../_services/user.service";
import { Faq } from "../faq";
import {LangChangeEvent, TranslateService} from '@ngx-translate/core';
import {DOCUMENT} from '@angular/common';
declare function toggle(): any;
@Component({
  selector: "app-level1readmore",
  templateUrl: "./level1readmore.component.html",
  styleUrls: ["./level1readmore.component.css"],
})
export class Level1readmoreComponent implements OnInit {
  constructor( private translateService: TranslateService, private userauth: UserService,@Inject(DOCUMENT) private document: Document) {}
  listfaq: Faq[];
  i: number = -1;
  lang:any;
  ngOnInit(): void {
    toggle();
    if (this.translateService.currentLang =="ar"){
      this.test()
    }
    this.translateService.onLangChange.subscribe((event: LangChangeEvent) => {
      this.test();
    })
    this.faq();
    console.log(this.translateService.currentLang);
  }
test(){
  let nav7 = this.document.getElementById("ul1");
  if (nav7 !== null) {
    nav7.dir  = this.translateService.currentLang === "ar" ?  "rtl": "ltr" ;
    console.log('this exist');
  }

}
  faq() {
    this.userauth.getlistfaq1().subscribe(
      (data) => {
        this.listfaq = data;
        console.log(data);
      },
      (err) => {
        console.log(err);
      }
    );
  }
}
