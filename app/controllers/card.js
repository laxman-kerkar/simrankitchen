import Controller from '@ember/controller';
import {inject as service} from '@ember/service';
import {action} from '@ember/object';



export default class CardController extends Controller{

    @service('shopping-cart') cart;

 
    @action 

        addToCart(item){

           this.cart.add(item);


        }
   


    


}