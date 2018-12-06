import { Injectable } from '@angular/core';

@Injectable()
export class SortService {

  constructor() { }

  public sortByName(arr: Person[], order: string): void {
    switch (order) {
      case "ascending":
        this.bubbleSort(arr, "name");
        break;
      case "descending":
        this.bubbleSort(arr, "name").reverse();
    }
  }

  private bubbleSort(arr: Person[], prop: string): Person[] {
    if (arr.length < 2) {
      throw new Error("Array is too short for sorting!");
    }
    let counter: number = arr.length - 2;
    while (counter >= 0) {
      for (let i = 0; i <= counter; i++) {
        if (this.isSwapNecessary(arr[i][prop], arr[i + 1][prop])) {
          [arr[i], arr[i + 1]] = [arr[i + 1], arr[i]];
        }
      }
      counter--;
    }
    return arr;
  }

  private isSwapNecessary(a: string, b: string): boolean {
    const str1: string = a.toLowerCase();
    const str2: string = b.toLowerCase();
    const length: number = Math.min(str1.length, str2.length);
    for (let i = 0; i < length; i++) {
      if (str1[i] < str2[i]) {
        return false;
      } else if (str1[i] === str2[i]) {
        if (i === length - 1 && str1.length > str2.length) {
          return true;
        }
        continue;
      } else {
        return true;
      }
    }
  }
}
