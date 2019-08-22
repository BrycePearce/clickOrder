import { Injectable } from '@angular/core';

// Models
import { Selection } from '../../models/RestaurantModel';

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

  reduceSelectionKey(checkout: { selections: Selection[] }, key: string) {
    return checkout.selections.reduce(
      (accumulator, currentValue) => accumulator + Number(currentValue[key]), 0
    );
  }
}
