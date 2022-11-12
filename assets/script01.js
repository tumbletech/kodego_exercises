const grocerylist = document.getElementsByClassName ('grocery-list') [0];
const deleteitems = document.getElementById ('deleteitems');
const userInput = document.getElementById ('userInput');
const allItems = document.getElementById ('allItems');

deleteitems.addEventListener ("click", function () {
    allItems.innerHTML = ''
} )

userInput.addEventListener("keydown", function (event){
    if(event.key == "Enter")
        addItem();

})

function addItem(){
    var h2 = document.createElement("h2");
    h2.innerHTML = "- " + userInput.value;

    h2.addEventListener("click", function(){
        h2.style.textDecoration = "line-through";
    })

    allItems.insertAdjacentElement("beforeend", h2);

    userInput.value = "";
}