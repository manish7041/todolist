import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-popup',
  templateUrl: './popup.component.html',
  styleUrls: ['./popup.component.css']
})
export class PopupComponent {
  arry = [
    { id: 1, type: 'work', img: "assets/icons8-filled-circle-red.png" },
    { id: 2, type: 'entertainment', img: "assets/icons8-filled-circle-green.png" },
    { id: 3, type: 'family', img: "assets/icons8-filled-circle-pink.png" },
    { id: 4, type: 'study', img: "assets/icons8-filled-circle-blue.png" }
  ]

  @Input() value: string = '';

  @Output()
  popUpValue: EventEmitter<string> = new EventEmitter<string>();
  @Output()
  popUpTask: EventEmitter<object> = new EventEmitter<object>();

  closePop() {
    this.value = ''
    //  console.log( this.value);
    this.popUpValue.emit('fasle');

  }

  addTask(taskData: { title: string, description: string, type: string }) {
    this.popUpTask.emit(taskData)
    

    //  console.log(taskData);


  }




}
