
const add = document.querySelector("#plus");
const subtract = document.querySelector("#minus");
const multiply = document.querySelector("#multiply");
const divide = document.querySelector("#divide");
const one = document.querySelector(".one");
const two = document.querySelector(".two");
const three = document.querySelector(".three");
const four = document.querySelector(".four");
const five = document.querySelector(".five");
const six = document.querySelector(".six");
const seven = document.querySelector(".seven");
const eight = document.querySelector(".eight");
const nine = document.querySelector(".nine");
const zero = document.querySelector(".zero");
const screen = document.querySelector(".screen");
const remove = document.querySelector("#remove");
const result = document.querySelector("#result");

one.addEventListener("click", () => {
    screen.innerHTML += 1;
});
two.addEventListener("click", () => {
    screen.innerHTML += 2;
});
three.addEventListener("click", () => {
    screen.innerHTML += 3;
});
four.addEventListener("click", () => {
    screen.innerHTML += 4;
});
five.addEventListener("click", () => {
    screen.innerHTML += 5;
});
six.addEventListener("click", () => {
    screen.innerHTML += 6;
});
seven.addEventListener("click", () => {
    screen.innerHTML += 7;
});
eight.addEventListener("click", () => {
    screen.innerHTML += 8;
});
nine.addEventListener("click", () => {
    screen.innerHTML += 9;
});
zero.addEventListener("click", () => {
    screen.innerHTML += 0;
});
plus.addEventListener("click", () => {
    screen.innerHTML += "+";
});
minus.addEventListener("click", () => {
    screen.innerHTML += "-";
});
multiply.addEventListener("click", () => {
    screen.innerHTML += "x";
});
divide.addEventListener("click", () => {
    screen.innerHTML += "/";
});
remove.addEventListener("click", () => {
    screen.innerHTML = "";
});
result.addEventListener("click", () => {
    let operation = screen.innerHTML;
    let len = operation.length;
    let lplen = len - 1;
    for (let i = 0; i <= lplen; i++) {
        let alpha = operation[i];
        if (alpha == "+" || alpha == "-" || alpha == "x" || alpha == "/") {
            var posotion = i;
            console.log(`${posotion} is the index of the sign`);
            
        }
    }
    var firstnum=Number(operation.slice(0 , posotion));
    var secondnum=Number(operation.slice(posotion+1 , len));
    console.log(`${firstnum} is the first number`);
    console.log(`${secondnum} is the second number`);


    if (operation[posotion] == "+") {
        var op = firstnum + secondnum;
        screen.innerHTML = op;
    }
    if (operation[posotion] == "-") {
        var op = firstnum - secondnum;
        screen.innerHTML = op;
    }
    if (operation[posotion] == "x") {
        var op = firstnum * secondnum;
        screen.innerHTML = op;
    }
    if(operation[posotion]=="/"){
        var op = firstnum/secondnum;
        screen.innerHTML = op;
    }


});