let display = document.getElementById("displayContent");
let displayExpression = [1, " + ", 2];

display.innerHTML = showOnDisplay(displayExpression);


//add
function add(myArray) {
    return myArray.reduce((accumulator, currrentValue) => accumulator + currrentValue)
}


//returns array as string for display
function showOnDisplay(array) {
    let m = "";
    array.forEach((el) => {
        m += el
    })
    return m;
}

console.log(displayContent);