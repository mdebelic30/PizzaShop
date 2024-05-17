import {selectData}   from './selectData.js'; //importing select data javascript


export class PizzaModel{

    static store = selectData;
 /**
 * 
 * @constructor
 */
    constructor(){
        /** Defining selectors */
        this.base = "undefined";
        this.sauce = "undefined";
        this.toppings = "undefined";
    }

    getProperties() {
        let properties = [];
        for (let property in this) {
            properties.push(property);
        }
        return properties;
    }

    getOptions(selectID) {
        let data; 
        switch (selectID) {
            case 'base':
                data = PizzaModel.store;
                break;
            case 'sauce':
                data = PizzaModel.store[this.base].sauce;
                break;

            case 'toppings':
                data = PizzaModel.store[this.base].toppings;
                break;
        }

    let options = [];
        for (let objectProperty in data) {
            options.push(objectProperty);
        }
        return options;
    }

    persist(){
        localStorage.setItem('pizza' , JSON.stringify(this));

        let pizza = localStorage.getItem('pizza');
        console.log(pizza === null ? 'No pizza found in local storage' : JSON.parse(pizza));
        console.log(pizza === null? 'No pizza found in local storage' : pizza);
    }

}

