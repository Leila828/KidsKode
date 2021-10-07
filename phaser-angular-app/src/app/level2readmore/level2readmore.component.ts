import {Component, Inject, OnInit} from '@angular/core';
import { UserService } from "../_services/user.service";
import { Faq } from "../faq";
import {LangChangeEvent, TranslateService} from '@ngx-translate/core';
import {DOCUMENT} from '@angular/common';
declare function toggle(): any;
@Component({
  selector: "app-level2readmore",
  templateUrl: "./level2readmore.component.html",
  styleUrls: ["./level2readmore.component.css"],
})
export class Level2readmoreComponent implements OnInit {
  listfaq: Faq[];

  constructor(private translateService: TranslateService, private userauth: UserService, @Inject(DOCUMENT) private document: Document) {}

  ngOnInit(): void {
    toggle();
    this.faq();
    if (this.translateService.currentLang =="ar"){
      this.test()
    }
    this.translateService.onLangChange.subscribe((event: LangChangeEvent) => {
     this.test();
   })

  }

  test(){
    let nav7 = this.document.getElementById("ul1");
    if (nav7 !== null) {
     nav7.dir  = this.translateService.currentLang === "ar" ?  "rtl": "ltr" ;
      console.log('this exist');
    }
    let nav8 = this.document.getElementById("ul2");
    if (nav8 !== null ) {
      nav8.dir  = this.translateService.currentLang === "ar" ?   "rtl" :"ltr";
      console.log('this exist');
    }
   let nav10 = this.document.getElementById("div1");
    if (nav10 !== null ) {
      nav10.dir  = this.translateService.currentLang === "ar" ?   nav10.style.paddingRight= "12px" :nav10.style.paddingRight= "12px";
      console.log('this exist');
    }

  }
  faq() {
    this.userauth.getlistfaq2().subscribe(
      (data) => {
        this.listfaq = data;
      },
      (err) => {
        console.log(err);
      }
    );
  }

}
