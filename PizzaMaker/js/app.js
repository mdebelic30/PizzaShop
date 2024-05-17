import {PizzaView} from './view/PizzaView.js';
import {PizzaController} from './controller/PizzaController.js';
import {PizzaModel} from './model/PizzaModel.js';

import {FormView}           from './view/FormView.js';
import {FormController}     from './controller/FormController.js';
import {FormModel}          from './model/FormModel.js';

class App {

    constructor(){

        const url = window.location.href; //localhost
        const page = url.match(/[a-z]*.html/)[0];

        switch (page){
            case 'index.html':
                new PizzaController(new PizzaModel(),  new PizzaView());
                break;
            case 'form.html':
                new FormController(new FormModel(), new FormView());
                break;
        }
    }
}

const app = new App();
