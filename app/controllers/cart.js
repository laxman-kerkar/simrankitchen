import Controller from '@ember/controller';
import {inject as service} from '@ember/service';
import { action } from '@ember/object';




export default class CardController extends Controller {

    @service cart;


    @action
    changeItemCount(item,event)
    {
        item.count= parseInt(event.target.value);
        if(item.count==0)
        {
            this.cart.remove(item);
        }


    }
    @action
    removeItem(item)
    {
        this.cart.remove(item);
    }


    }
