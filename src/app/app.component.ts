import { Component, Output, EventEmitter } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';

  data: string = '';

  addpopValue() {
    this.data = 'true'

  }

  newtask: Object = {}
  close(value: any) {
    this.data = value

  }

  submit(d: any) {

    this.data = 'false'
    let ob = {
      id: this.task.length + 1,
      menu: "assets/more.png",
      checkbox: false,
      label:'done'
    }
    Object.assign(d, ob)
   
    console.log(ob);
    if (d != undefined) { this.tasks.unshift(d) }

  }


  // task section

  tasks = [
    { id: 1, title: "Fetch Water", menu: "assets/more.png", description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Accusantium, rerum! Provident rerum velit reiciendis, architecto nesciunt minima. Amet, dolor nam.", type: "assets/icons8-filled-circle-pink.png", checkbox: false,label:'done' },

    { id: 2, title: "Study Well", menu: "assets/more.png", description: "Lorem ipsum, dolor sit amet consectetur adipisicin", type: "assets/icons8-filled-circle-blue.png", checkbox: true,label:"done" },

    { id: 3, title: "Clean yourself", menu: "assets/more.png", description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit.", type: "assets/icons8-filled-circle-red.png", checkbox: false,label:"done" },
    { id: 4, title: "Fetch Water", menu: "assets/more.png", description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit.", type: "assets/icons8-filled-circle-red.png", checkbox: false,label:'done'},


    { id: 5, title: "work hard ", menu: "assets/more.png", description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit.", type: "assets/icons8-filled-circle-green.png", checkbox: false,label:'done'},

    { id: 6, title: "be honest", menu: "assets/more.png", description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Accusantium, rerum! Provident rerum velit reiciendis, architecto nesciunt minima. Amet, dolor nam.", type: "assets/icons8-filled-circle-blue.png", checkbox: false,label:'done' },

    { id: 7, title: "to write book", menu: "assets/more.png", description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit.", type: "assets/icons8-filled-circle-red.png", checkbox: false,label:'done' },
    { id: 8, title: "Fetch Water", menu: "assets/more.png", description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit.", type: "assets/icons8-filled-circle-red.png", checkbox: false,label:'done' },

    { id: 9, title: "my name", menu: "assets/more.png", description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Accusantium, rerum! Provident rerum velit reiciendis, architecto nesciunt minima. Amet, dolor nam.", type: "assets/icons8-filled-circle-blue.png", checkbox: false,label:'done' },

    { id: 10, title: "Fetch Water", menu: "assets/more.png", description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Accusantium, rerum! Provident rerum velit reiciendis, architecto nesciunt minima. Amet, dolor nam.", type: "assets/icons8-filled-circle-pink.png", checkbox: false,label:'done' },

    { id: 11, title: "Fetch Water", menu: "assets/more.png", description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit.", type: "assets/icons8-filled-circle-blue.png", checkbox: false,label:'done' },

    { id: 12, title: "Fetch Water", menu: "assets/more.png", description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit.", type: "assets/icons8-filled-circle-green.png", checkbox: false,label:'done' },

  ]





  deleteTask(d: HTMLParagraphElement) {
    let id: any = d.id;
    for (let i = 0; i < this.tasks.length; i++) {
      if (this.tasks[i].id == id) {
        console.log(this.tasks[i].id);

        this.tasks.splice(i, 1);
        console.log(i);

        break;
      }
    }
  }

  update(data: { id: number, title: string, description: string, type: string }) {
    let myArray = this.tasks.findIndex((x) => x.id == data.id)
    console.log(myArray);
    this.tasks[myArray].title = data.title;
    this.tasks[myArray].description = data.description;
    this.tasks[myArray].type = data.type;
    switch (data.type) {
      case 'work': 
      this.tasks[myArray].type = "assets/icons8-filled-circle-red.png";
        break;
        case 'entertainment': 
        this.tasks[myArray].type = "assets/icons8-filled-circle-green.png";
          break;
          case 'family': 
          this.tasks[myArray].type = "assets/icons8-filled-circle-pink.png";
            break;
            case 'study': 
            this.tasks[myArray].type = "assets/icons8-filled-circle-blue.png";
              break;
    
      default:
        this.tasks[myArray].type = "/assets/icons8-white-circle-48.png"
        break;
    }

    console.log(this.tasks);

    this.editconditon = false
    this.edittwo = false


  }

  edit: number = 0;
  edittwo: boolean = false;
  editMenu(d: HTMLImageElement) {
    let id: any = d.id
    console.log(id);

    this.tasks.forEach(e => {
      if (e.id == id) {
        this.edit = id
        this.edittwo = !this.edittwo
        console.log(this.edittwo);

      }
    })
  }


  barValue: any;
  editconditon: boolean = false;
  editbar(d: HTMLParagraphElement) {
    let id: any = d.id
    this.barValue = id;
    this.editconditon = !this.editconditon

  }

  displayValue: string = ''
  navValueSearch(d: string) {
    let all = 'assets/icons8-white-circle-48.png'
    if(d ===  all){
      this.displayValue = ''
    }else{
      this.displayValue = d
    }
   
    console.log(d);
  }

  taskValue: string = ''
  searchtaskValue(d: string) {
    this.taskValue = d;
  }

  radiovalue: boolean = false
  sendRadioValue(d: any) {
    let id = d.id;
    let select = d.checked;

    this.tasks = this.tasks.map((e) => {
      if (e.id == id) {
        e.checkbox = select;
        this.radiovalue = !this.radiovalue
        return e
      }
      return e;
    });
    console.log(id);

    console.log(select);




  }

  task = this.tasks
  hidetask(d: boolean) {
    if (d) {
      this.tasks = this.tasks.filter(task => task.checkbox !== true);
    } else {
      this.tasks = this.task
    }
  }


}
