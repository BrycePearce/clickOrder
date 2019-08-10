import { Injectable } from '@angular/core';

// Third Party
import sortBy from 'lodash-es/sortBy';

@Injectable({
  providedIn: 'root'
})
export class UtilityService {
  private sortBy = sortBy;
  constructor() { }

  sortByKey(list: Array<any>, key: string): Array<any> {
    return sortBy(list, o => o[key]);
  }
}
