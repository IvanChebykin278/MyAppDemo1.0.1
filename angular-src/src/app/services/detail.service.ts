import { Injectable } from '@angular/core';

@Injectable()
export class DetailService {

  constructor() { }

  oItem: Object;

  setItem(item) {
    this.oItem = item;
  }

  getItem() {
    return this.oItem;
  }

}
