import { Component, Input, EventEmitter, Output, OnInit, OnDestroy} from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-counter',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './counter.component.html',
  styleUrl: './counter.component.css'
})
export class CounterComponent implements OnInit, OnDestroy{
  @Input()
  count = 900

  imcrementCount(){
    this.count++
    //send the updated data
    this.myEvent.emit(this.count)
  }
  @Output()
  myEvent = new EventEmitter()

  constructor(){
    console.log("Counter is created")
  }
  //After creation it will initialize
  ngOnInit(): void {
    console.log("counter is Rendered") 
    let obj: any= document.getElementById("hc")
    obj.style.color = "red"
  }
  ngOnDestroy(): void {
    console.log("couter is destoryed")
  }
}
