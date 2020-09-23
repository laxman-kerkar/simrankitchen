import Component from '@glimmer/component';
import {inject as service} from '@ember/service';
import {action} from '@ember/object';


export default class CartItemComponent extends Component
{
   @service cart;

   @action
   removeItem(item) {
      this.cart.remove(item);
   }
}