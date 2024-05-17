export class PizzaController{


    constructor(model, view){
        this.model = model;
        this.view = view;
    

            
            let properties = this.model.getProperties();
            this.view.renderSelects(properties);
    
            
            let firstSelectID = properties[0];
            this.view.addOptions(firstSelectID, this.model.getOptions(firstSelectID));
    
            //event handler for 'change' event
            this.view.selects.forEach((select) => {
                select.addEventListener('change', this.handleSelectChange);
            });
    
            //submit handler
            this.view.pizzaForm.addEventListener('submit', this.handleFormSubmit);
    
}
    
        handleSelectChange = (event) => {
            
            let select = event.target;
            this.model[select.id] = select.value;
            console.log(this.model);
    
            
            let nextSelect = select.nextElementSibling;
    
            while (nextSelect) {
                this.view.addOptions(nextSelect.id, this.model.getOptions(nextSelect.id));
                nextSelect = nextSelect.nextElementSibling;
            }
            
            this.view.renderPizza();
        }
    
        handleFormSubmit = (event) => {
            this.model.persist();
            
        }
    }


