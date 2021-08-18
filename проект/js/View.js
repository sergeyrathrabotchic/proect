var controller = new Controller;

var body = document.querySelector("body");
var table = document.createElement("table");
body.appendChild(table);
var tr = document.createElement("tr");
table.appendChild(tr);
var th1 = document.createElement("th");
th1.innerHTML = "id";
tr.appendChild(th1);
var th2 = document.createElement("th");
th2.id = "gruppa";
th2.innerHTML = "Группа";
tr.appendChild(th2);
var th3 = document.createElement("th");
th3.id = "action";
th3.innerHTML = "Действия";
tr.appendChild(th3);

function strings (id,name){
    var tr = document.createElement("tr");
    table.appendChild(tr);
    var th1 = document.createElement("th");
    th1.innerHTML = id;
    tr.appendChild(th1);
    var th2 = document.createElement("th");
    th2.id = id;
    th2.innerHTML = name;
    tr.appendChild(th2);
    var th3 = document.createElement("th");
    tr.appendChild(th3);
    var input1 = document.createElement("input");
    input1.id = "Изменить" + id;
    input1.type = "button";
    input1.name = "change";
    input1.value = "Изменить";
    input1.classList.add('B');
    th3.appendChild(input1);
    var input2 = document.createElement("input");
    input2.id = "Удалить" + id;
    input2.type = "button";
    input2.name = "delit";
    input2.value = "Удалить";
    input2.classList.add('A');
    th3.appendChild(input2);
}


controller.controller_add_lines();

var div_add_forma = document.createElement("div");
div_add_forma.id = "add_forma";
body.appendChild(div_add_forma);
var input = document.createElement("input");
input.type = "button";
input.name = "add_forma";
input.value = "Добавить";
input.classList.add('B');

controller.controller_add_forma();
div_add_forma.appendChild(input);

function edd(){
var form = document.createElement("form");
form.action = " ";
form.name = "edd";
form.id = "form";
form. method = "post";
body.appendChild(form);
var div_style_form = document.createElement("div");
div_style_form.id = "styleform";
form.appendChild(div_style_form);
var br = document.createElement("br");
div_style_form.appendChild(br);
var p = document.createElement("p");
p.innerHTML = "Название группы: ";
div_style_form.appendChild(p);
p.appendChild(br);
var input = document.createElement("input");
input.type = "text";
input.name = "vvod_name";
input.id = "vvod_name";
input.required = "required";
div_style_form.appendChild(input);
var div_add = document.createElement("div");
div_add.id = "add";
div_style_form.appendChild(div_add);
var input2 = document.createElement("input");
input2.type = "button";
input2.name = "add";
input2.id = "input2";
input2.value = "Добавить";
input2.classList.add('B');
div_style_form.appendChild(input2);
controller.controller_add_line();
div_style_form.appendChild(br);
var input3 = document.createElement("input");
input3.type = "button";
input3.name = "exit";
input3.id = "input3";
input3.value = "Отмена";
input3.classList.add('B');
div_style_form.appendChild(input3);
controller.controller_exit();
}