import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class LoadBalancersService {
  newModal = new Subject<any>();
  newEditModal = new Subject<any>();
  loadBalancers: any;
  selectedItems = new Array();
  searchString: string;

  constructor() { }

  // return all selected
  returnSelected() {
    return this.selectedItems;
  }

  isChecked(item) {
    for (const obj of this.selectedItems) {
      if (item.id === obj.id) { return true; }
    }
    return false;
  }

  resetSelected() {
    this.selectedItems = [];
  }

  // Record/Delete a selection from the "selected items" array.
  selectItem(item, event) {
    if (event) {
      this.selectedItems.push(item);
    } else {
      for (const obj of this.selectedItems) {
        if (item.id === obj.id) {
          this.selectedItems.splice(
            this.selectedItems.indexOf(obj), 1);
        }
      }
    }
  }
}