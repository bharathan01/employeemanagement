import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterpipe'
})
export class FilterpipePipe implements PipeTransform {

  transform(value:any,searchTerm:any):any {

    if(searchTerm == null ){
      return value
    }
    return value.filter(function(search:any){
  
        return JSON.stringify(search).trim().toLowerCase().includes(searchTerm.trim().toLowerCase())
     

    })
  }

}
