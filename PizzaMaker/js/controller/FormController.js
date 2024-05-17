export class FormController{

/**
 * 
 * @constructor
 */
    constructor(model, view){
        this.model = model;
        this.view = view;
        this.view.createInputs(this.model.getInputData());

        this.view.inputs.forEach((input) => {
            input.addEventListener('change' , this.handleInputChange);
        });
        //submit handler
        this.view.form.addEventListener('submit' , this.handleFormSubmit);

    }

//updated model
    handleInputChange = (event) =>{

        let input = event.target;
        this.model [input.name] = input.value;
        this.model [input.address] = input.value;
        console.log(input.value);
    }

    handleFormSubmit = (event) => {

        event.preventDefault();
        this.model.persist();
        alert("You succesfully order your pizza!"); //when user order pizza this is alert that will pop up
    
    }
    
}
   
 

    
  