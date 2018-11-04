import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'customDate'
})
export class CustomDatePipe implements PipeTransform {

  transform(value: any, locale?: any): any {
    const now = new Date();
    const publishedAt = new Date(value);
    let result = (Number(now) - Number(publishedAt)) / 60000;
    let res;

    if (result < 60) {
      res = `${Math.ceil(result)} минут(ы) назад`;
    } else if (((result / 60) >= 1) && ((result / 60) <= 24)) {
      res = `${Math.round(result / 60)} час(а, ов) назад`;
    } else {
      res = publishedAt.toLocaleString(locale, {year: 'numeric', month: 'long', day: 'numeric', hour: 'numeric', minute: 'numeric'});
    }

    return res;
  }

}
