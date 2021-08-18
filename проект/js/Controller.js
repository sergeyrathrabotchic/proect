
class Controller extends Model{
    controller_add_lines(){
        return  super.lines();
    }
    controller_model_add_forma(){
        return super.model_add_forma();
    }

    
    controller_add_forma(){
        
        return input.onclick = ()=> {
        super.model_add_forma();
     }
    }
    controller_add_line(){
        return  input2.onclick = ()=>{
        super.edd_line();
     }
    }
    controller_exit(){
        var input3 = document.querySelector("#input3");
        return input3.onclick = ()=>{
        super.exit();
     }
    }
}