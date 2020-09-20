const allClear = document.getElementById("buttonAllClear");
const clear = document.getElementById("buttonClear")
const barDisplay = document.getElementById("barCalculator");
var count = "";
var total = 0;
var conditionVal = 0;
var conditionOperation = true;

function valueToDisplay(val){
    if (conditionVal == 0){
        count += val;
        barDisplay.value += val;
        conditionOperation = true;
        console.log(count, conditionVal, conditionOperation);
    } else if ( conditionVal == 1){
        count += val;
        barDisplay.value = val;
        conditionOperation = true;
        console.log(count, conditionVal, conditionOperation);
    } else {
        count = "";
        barDisplay.value = "";
        count += val;
        barDisplay.value += val;
        conditionVal = true;
        conditionOperation = true;
        console.log(count, conditionVal, conditionOperation);
    }
}

function operationToDisplay(operation){
    conditionVal = 1;
    if (conditionOperation == true){
        count += operation;
        barDisplay.value = "";
        conditionOperation = false;
        console.log(count, conditionVal, conditionOperation);
    } else {
        barDisplay.value = "";
        console.log(count, conditionVal, conditionOperation);
    }
}

function countValue(){
    total = eval(count);
    barDisplay.value = total;
    count = total;
    conditionVal = 2;
    console.log(count, conditionVal, conditionOperation);
}

clear.addEventListener("click", function(){
    var tempDisplay = barDisplay.value;
    barDisplay.value = tempDisplay.slice(0, -1);
    count = count.slice(0, -1);
    console.log(count, conditionVal, conditionOperation);
})

allClear.addEventListener("click", function(){
    barDisplay.value = "";
    count = ""
    console.log(count, conditionVal, conditionOperation);
});