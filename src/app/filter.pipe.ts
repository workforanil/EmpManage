import { Pipe, PipeTransform } from '@angular/core';
import { EmployeeAccount } from './empaccount.services';
import { MainPageServices } from './main-page/main-page-services';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  constructor(public employeeService: EmployeeAccount, public mainPageService: MainPageServices){
    
  }
  transform(value: any, filterString: string, propName: string ): any {
    if(filterString.length === 0){
      return this.employeeService.accounts;
    }
    const resultArray = [];
    // this.mainPageService.resultArray.splice(0,this.mainPageService.resultArray.length);
    for(const item of value){
      if(item[propName].toLowerCase().includes(filterString.toLowerCase())){
        resultArray.push(item)
        
        // this.mainPageService.resultArray.push(item);
        console.log(this.mainPageService.resultArray);
      }
    }
    return this.mainPageService.resultArray;
  }

}
