function showData(){
    document.getElementById("data").innerHTML+= localStorage.getItem("inputData");
}


showData();