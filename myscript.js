var button = document.getElementById("add");
var input = document.getElementById("userinput");

var ul = document.querySelector("ul");

function inputLength(){
  return input.value.length;
}

function createListElement(){
  var li = document.createElement("li");
  li.appendChild(document.createTextNode(input.value));
  li.classList.add("list");
  li.addEventListener("click", function(){
    this.classList.toggle("done");
  })
  ul.appendChild(li);
  var db = document.createElement("button");
  db.classList.add("db");
  db.appendChild(document.createTextNode("Remove"));
  li.appendChild(db);

  function deleteListItem() {
  		li.classList.add("delete");
  	}

db.addEventListener("click", deleteListItem);

  input.value = "";
}

function addListAfterClick(){
  if(inputLength() > 0){
    createListElement();
  }
}

function addListAfterKeypress(event){
if(inputLength() > 0 && event.keyCode === 13){
  createListElement();
}
}

button.addEventListener("click", addListAfterClick);

input.addEventListener("keypress", addListAfterKeypress);
