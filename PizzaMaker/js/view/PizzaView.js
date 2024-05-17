export class PizzaView{

/**
 * 
 * @constructor
 */
    constructor(){
        this.pizzaForm = document.querySelector("#form-pizza");
        this.pizzaDiv = document.querySelector("#pizza-div");
        this.selectsDiv = document.querySelector("#div-selects");
        this.selects = null;
    }

    renderSelects(selectIDs) {
        selectIDs.forEach((name) => {
            let select = document.createElement('select');
            select.setAttribute("id", name);
            select.options.add(new Option(` -- Select a ${name} -- `, 'undefined'));
            this.selectsDiv.appendChild(select);
        });

        this.selects = this.selectsDiv.querySelectorAll('select');
    }

    addOptions(selectID, options) {
        let select = this.selectsDiv.querySelector(`#${selectID}`);
        select.length = 1;

        let nextSelect = select.nextElementSibling;
        while (nextSelect) {
            nextSelect.length = 1;
            nextSelect = nextSelect.nextElementSibling;
        }

        options.forEach((option) => {
            select.options.add(new Option(option, option));
        });
    }

    /**images that are chaning based on what user select*/
    renderPizza() {
        let imgSrc = 'media/';

        this.selects.forEach((select) => {
            imgSrc += `${select.value}-`;
        });
        imgSrc = imgSrc.slice(0, -1) + '.png'; 

        this.pizzaDiv.querySelector('img').src = imgSrc;
    }
    

}


