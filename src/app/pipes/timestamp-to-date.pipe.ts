import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'timestampToDate'
})
export class TimestampToDatePipe implements PipeTransform {

  // transform(value: tipo-in-entrata, ...args: passare-altri-parametri[]): tipo-in-uscita {
  //   return null;
  // }

  // transform(value: number): string {
  //   const millisecond = value * 1000;
  //   const date= new Date(millisecond);
  //   return date.getDate()
  //     + '/'+ (date.getMonth() + 1) 
  //     + '/' + date.getFullYear()
  //     + ' ' + date.getHours()
  //     + ':'+ (date.getMinutes().toString().length > 1 ? date.getMinutes() : '0' + (date.getMinutes()));
  // }


  transform(value: number, hasTime:boolean = true ): string {
    const millisecond = value * 1000;
    const date= new Date(millisecond);

    let dateString = date.getDate()
      + '/'+ (date.getMonth() + 1) 
      + '/' + date.getFullYear();
    if(hasTime){
      dateString = ' ore : ' + date.getHours()
                  + ':'+ (date.getMinutes().toString().length > 1 ? date.getMinutes() : '0' + (date.getMinutes()));
    }
      return dateString;
  }

}
