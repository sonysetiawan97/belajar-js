const allClear = document.getElementById("buttonAllClear");
const clear = document.getElementById("buttonClear")
const barDisplay = document.getElementById("barCalculator");
var count = "";
var total = 0;

function valueToDisplay(val){
    count += val;
    barDisplay.value += val;
    console.log(count);
}

function operationToDisplay(operation){
    count += operation;
    barDisplay.value = "";
    console.log(count);
}

function countValue(){
    total = eval(count);
    barDisplay.value = total;
    count = total
    console.log(count);
}

clear.addEventListener("click", function(){
    var tempDisplay = barDisplay.value;
    barDisplay.value = tempDisplay.slice(0, -1);
    count = count.slice(0, -1);
    console.log(count);
})

allClear.addEventListener("click", function(){
    barDisplay.value = "";
    count = ""
    console.log(count);
});