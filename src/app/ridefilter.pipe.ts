import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'ridefilter'
})
export class RidefilterPipe implements PipeTransform {
  
  transform(value: any, filters: string): any {
    let search :string  ="Infosys";
     if (!filters) { 
      return value;
     }
    else if (filters == "TO") { 
    return value.filter((loc: { endPoint: string; }) => loc.endPoint.toLowerCase().indexOf(search.toLowerCase())!= -1);
    }
   else if(filters == "FROM") {
     return value.filter((loc: { startPoint: string; }) => loc.startPoint.toLowerCase().indexOf(search.toLowerCase()) != -1);
   }
   else if (filters == "OTHER"){
    return value.filter((loc: { startPoint: string; endPoint: string; }) => loc.startPoint.toLowerCase().indexOf(search.toLowerCase()) == -1 && 
          loc.endPoint.toLowerCase().indexOf(search.toLowerCase()) == -1 );
   }
   else {
     return value;
   }
  }

}