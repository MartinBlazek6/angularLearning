import {Component} from '@angular/core';
import {WishItem} from "../../../shared.models/wishItem";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  items: WishItem[] = [
    new WishItem('naucit sa angular'),
    new WishItem('nejaka kavicka', true),
    new WishItem('naucit sa javu')
  ];
  title = 'wishlist';

  visibleItems: WishItem[] = this.items;

  newWishText = '';
  listFilter: String = '0';
  numericValue : any = this.listFilter;

  toggleItem(item: WishItem) {
    item.isComplete = !item.isComplete
    this.filterChanged(this.numericValue)
  }

  addNewWish() {
    if (this.newWishText !== '') {
      this.items.push(new WishItem(this.newWishText));
      this.newWishText = '';
      this.filterChanged(this.numericValue)
    }
  }

  filterChanged(value: any) {
    this.numericValue = +value;
    if (this.numericValue === 0) {
      this.visibleItems = this.items;
    } else if (this.numericValue === 1) {
      this.visibleItems = this.items.filter(item => !item.isComplete);
    } else {
      this.visibleItems = this.items.filter(item => item.isComplete);
    }
  }
}
