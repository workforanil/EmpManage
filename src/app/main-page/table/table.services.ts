import { Injectable } from "@angular/core";
import { MainPageServices } from "../main-page-services";

@Injectable()
export class TableServices {
    
    i : number = 1;
    constructor(private mainPageService: MainPageServices){
        
    }

    onNext(){
        this.i = this.mainPageService.i;
        // console.log(this.i);
      }
    onPrev(){
        this.i = this.mainPageService.i;
        // console.log(this.i);
    }
} 