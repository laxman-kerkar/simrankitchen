import Component from '@glimmer/component';
import {action} from '@ember/object';
import {inject as service} from '@ember/service';


export default class CardComponent extends Component{

    @service cart;

    @action

    addToCart(){
        const {product} = this.args;
        this.cart.add(product);

    }
}