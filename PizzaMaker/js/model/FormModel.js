export class FormModel{

/**
 * 
 * @constructor
 */
    constructor(){
        this.name = "";
        this.address = "";
        this.init();
    }

    init(){
         //properties for local storage
        let pizza = JSON.parse(localStorage.getItem('pizza'));
        for (let property in pizza){
            this[property] = pizza[property];
        }
    }

    getInputData(){
        let inputString = JSON.stringify(this);
        return JSON.parse(inputString);
    }

    persist(){

        localStorage.setItem('pizza' , JSON.stringify(this));
    }
}

