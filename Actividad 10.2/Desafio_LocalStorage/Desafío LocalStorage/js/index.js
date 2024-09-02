const btnSave = document.getElementById("buttonText");

function saveData(){
    var data = document.getElementById("inputText").value;
    data = window.localStorage;
    localStorage.setItem("inputData" , document.getElementById("inputText").value);
    console.log(localStorage.getItem("inputData"));

}


btnSave.addEventListener("click", saveData);
