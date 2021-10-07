import { AfterViewInit, Component, OnInit, ViewChild } from "@angular/core";
import * as Blockly from "blockly";
import { Router } from "@angular/router";
@Component({
  selector: "app-course-list",
  templateUrl: "./course-list.component.html",
  styleUrls: ["./course-list.component.css"],
})
export class CourseListComponent implements OnInit {
  constructor(private router: Router) {}
  ngOnInit(): void {}
  Level1Click() {
    this.router.navigate(["levelDetails"]);
  }
}
