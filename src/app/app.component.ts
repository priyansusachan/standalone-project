import { Component } from "@angular/core";
import { CounterComponent } from "./counter/counter.component";
import {CommonModule} from "@angular/common"

@Component({
    //Component without module
    standalone: true,
    selector: "app-root",
    template: `
    <h3> Standalone angular example {{ 10+20 }}</h3>
    <h6> App Count value is {{appCount}} </h6>
    <button (click)="imcrementCount()">Increase</button> 
    <button class="btn btn-primary" (click)="handleShow()"> Show/Hide App Counter </button>
    <hr>
    <app-counter *ngIf="show" [count]="appCount" (myEvent)="handleMyEvent($event)"></app-counter>
    <hr>
    <ul>
        <li *ngFor="let friend of friends">{{friend}}</li>
    </ul>
    <h4>Last line</h4>
    `,
    imports: [CounterComponent, CommonModule]

})
export class AppComponent{
    show = false
    appCount = 1
    friends = ["First", "Second", "Third"]

    handleMyEvent(val:number)
    {
        this.appCount = val
    }
    imcrementCount(){
        this.appCount++
    }
    handleShow()
    {
        this.show = !this.show
    }
}