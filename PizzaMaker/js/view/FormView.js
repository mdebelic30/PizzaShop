export class FormView{

/**
 * 
 * @constructor
 */
    constructor(){

        this.inputs = null;
        this.form = document.querySelector('#form-pizza-name');
    }

createInputs(dataObject){
    
    for (let property in dataObject){
        document.querySelector('fieldset').insertAdjacentHTML('beforeend' , 
        `<p>${property}<input name='${property}' value='${dataObject[property]}' type='text' size='30'/></p>`);
    }

    this.inputs = document.querySelectorAll('fieldset input');
}
}