let div = document.getElementById('gabriel');
let input = document.createElement('input');
input.setAttribute("type","text");
let button = document.createElement('button');
button.innerText = "Clica pae!";
button.addEventListener("click",function(){
    input.value = input.value.toUpperCase();
});
div.appendChild(input);
div.appendChild(button);