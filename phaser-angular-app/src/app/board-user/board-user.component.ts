import {Component, ElementRef, Inject, OnChanges, OnInit, SimpleChanges, ViewChild} from '@angular/core';
import {DOCUMENT} from '@angular/common';
import {Router} from '@angular/router';

@Component({
  selector: 'app-board-user',
  templateUrl: './board-user.component.html',
  styleUrls: ['./board-user.component.css'],
})
export class BoardUserComponent implements OnInit {
  currentTimee;
  video;
  @ViewChild('myVideo') my3Video: ElementRef;
  constructor( @Inject(DOCUMENT) private document: Document, private router: Router, ) { }

  ngOnInit(): void {
    const vid3 = this.document.getElementById('vi')[0];
  }
  onTimeUpdate() {
    const vid = this.my3Video.nativeElement;
    console.log(vid.currentTime);
    this.currentTimee = vid.currentTime;
    if (this.currentTimee >= 118.9  && this.currentTimee < 119.1) {
    vid.pause();
      const vid3 = this.document.getElementById('vi');
      vid3.style.display = 'none';
    const vid2 = this.document.getElementById('divId2');
    vid2.style.display = 'block';
    }
    if (this.currentTimee >= 119.3) {
      const vid2 = this.document.getElementById('divId2');
      vid2.style.display = 'none';
      const vid3 = this.document.getElementById('vi');
      vid3.style.display = 'block';
      vid.play();

    }
    if (this.currentTimee >= 162.176797) {

      vid.pause();

    }

  }

  courseClick() {
    const vid = this.my3Video.nativeElement;
    const vid2 = this.document.getElementById('divId2');
    const btn = this.document.getElementById('btn2');
    btn.style.backgroundColor = "#28a745";
    vid2.style.display = 'none';

    // tslint:disable-next-line:no-unused-expression triple-equals
     vid.currentTime == 15;
     this.currentTimee = vid.currentTime;
    vid.play();
  }
  courseClick2() {

    const btn = this.document.getElementById('btn1');
    btn.style.backgroundColor = "#a70b00";
    btn.classList.add('shake');


  }

  myTest1() {
    const vid = this.document.getElementById('divId');
    const vid2 = this.document.getElementById('vi');
    vid.style.display = 'block';
    vid2.style.display = 'none';
    console.log('called');
  }
  course1Click() {
    this.router.navigate(['sequencing']);
    console.log('clicked');
  }
  course2Click() {
    const vid = this.document.getElementById('divId');
    const vid2 = this.document.getElementById('vi');
    vid.style.display = 'none';
    vid2.style.display = 'block';
    console.log('called');
    console.log('clicked');
  }

}
