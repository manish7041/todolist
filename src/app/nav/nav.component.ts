import { Component, ElementRef, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {



//   nav = [
//     { circle: "", h: "Show All" },
//     { circle: "assets/icons8-filled-circle-red.png", h: "work" },
//     { circle: "assets/icons8-filled-circle-green.png", h: "entertainment" },
//     { circle: "assets/icons8-filled-circle-pink.png", h: "family" },
//     { circle: "assets/icons8-filled-circle-blue.png", h: "study" }
//   ]

//   ngOnInit() {
//   }
//   @Output()
//   navValue: EventEmitter<string> = new EventEmitter<string>();
//   @Output()
//   taskValue: EventEmitter<string> = new EventEmitter<string>();
//   @Output()
//   hideValue: EventEmitter<boolean> = new EventEmitter<boolean>();

//   SendNavValue(d: HTMLImageElement) {
//     let data = d.src;
//     this.navValue.emit(data.slice(22))
//      console.log(data);

//   }

//   searchTaskValue: string = '';
//   searchTask() {
//     this.taskValue.emit(this.searchTaskValue)
//   }


//   hideDoneTask(d: HTMLInputElement) {
//     let v: boolean = d.checked;
//     this.hideValue.emit(v)
//     console.log(v);

//   }
// }
nav = [
  { circle: "assets/icons8-white-circle-48.png", h: "All" },
  { circle: "assets/icons8-filled-circle-red.png", h: "work" },
  { circle: "assets/icons8-filled-circle-green.png", h: "entertainment" },
  { circle: "assets/icons8-filled-circle-pink.png", h: "family" },
  { circle: "assets/icons8-filled-circle-blue.png", h: "study" }
]

ngOnInit() {
}
@Output()
navValue: EventEmitter<string> = new EventEmitter<string>();
@Output()
taskValue: EventEmitter<string> = new EventEmitter<string>();
@Output()
hideValue: EventEmitter<boolean> = new EventEmitter<boolean>();

SendNavValue(d: HTMLImageElement) {
  let data = d.src;
  this.navValue.emit(data.slice(22))
   console.log(data);

}

searchTaskValue: string = '';
searchTask() {
  this.taskValue.emit(this.searchTaskValue)
}


hideDoneTask(d: HTMLInputElement) {
  let v: boolean = d.checked;
  this.hideValue.emit(v)
  console.log(v);

}
}

