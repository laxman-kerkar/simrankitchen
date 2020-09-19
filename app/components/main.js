import Component from '@glimmer/component';
import  { tracked } from '@glimmer/tracking';

export default class MainComponent extends Component{
    @tracked query = '';

    get results(){
        let{products,query}=this.args;
        if (query) {

            products = products.filter(product => product.name_id.includes(query));
        }

        return products;
    }
}