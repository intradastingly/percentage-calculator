window.addEventListener('load',main);

function main() {
    buttonSubmit();
    percentageClick()
}

function buttonSubmit(){
    const calculate = document.getElementById('calculate');
    calculate.onclick = calculatePercentages;
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
        const value = .6;
        calculatePercentages(value);
    } else if (id === "zero"){
        const value = .0;
        calculatePercentages(value);
    }
}

function calculatePercentages(value){
    const includes = document.getElementById('includesMoms').value;
    const excludes = document.getElementById('excludessMoms').value;
    const sum = document.getElementById('momsSum').value;
    console.log(includes, excludes, sum)
    console.log(value);
}

function updateInputFields(){

}

//take user input and apply to all boxes
//take number of input and apply percentage calculations on click
//update input to new calculations