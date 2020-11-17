window.addEventListener('load',main);

function main() {
    percentageClick()
}

function percentageClick(){
    const boxes = document.getElementsByClassName('box-row');
    for(const box of boxes){
        box.onclick = selectBox;
    }
}

function selectBox(event) {
    const id = event.target.id;
    if (id === "twentyFive"){
        const value = .25;
        calculatePercentages(value);
    } else if (id === "twelve"){
        const value = .12;
        calculatePercentages(value);
    } else if (id === "six"){
        const value = .06;
        calculatePercentages(value);
    } else if (id === "zero"){
        const value = .0;
        calculatePercentages(value);
    }
}

function calculatePercentages(value){
    let includes = document.getElementById('includesMoms').value;
    let excludes = document.getElementById('excludessMoms').value;
    let sum = document.getElementById('momsSum').value;

    //first input calculations
    taxRemove = Number(includes * value);
    excludesTax = includes - taxRemove;
    taxSum = taxRemove;
    
    //second field

    //third field

    updateInputFields(includes, excludesTax, taxSum)
}

function updateInputFields(includes, excludes, sum){
    document.getElementById('excludessMoms').value = excludes;
    document.getElementById('momsSum').value = sum;
    console.log(includes, excludes, sum)
}

//take user input and apply to all boxes
//take number of input and apply percentage calculations on click
//update input to new calculations