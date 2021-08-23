var model = new Model;
class Controller extends Model{
    controller_add_lines(){
        return  model.lines();
    }
    controller_model_add_forma(){
        return model.model_add_forma();
    }

    
    controller_add_forma(){
        
        return input.onclick = ()=> {
        model.model_add_forma();
     }
    }
    controller_add_line(){
        return  input2.onclick = ()=>{
        model.edd_line();
     }
    }
    controller_exit(){
        var input3 = document.querySelector("#input3");
        return input3.onclick = ()=>{
        model.exit();
     }
    }
}
