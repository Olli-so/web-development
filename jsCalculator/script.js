const form1 = document.getElementById('first')
function first() {
    const num1 = parseFloat(form1.elements['num11'].value);
    const num2 = parseFloat(form1.elements['num12'].value);
    const op1 =  form1.elements['operator1'].value;
    document.getElementById("result1").innerHTML = `Result is ${calc(num1,num2,op1)}`;
    return false
}
document.getElementById("submit1").addEventListener("click", first);





const form2 = document.getElementById('second')
function second()  {
    const num21 = parseFloat(form2.elements['num21'].value);
    const num22 = parseFloat(form2.elements['num22'].value);
    if (form2.elements['+'].checked) {
        var result = num21 + num22;
        document.getElementById("result2").innerHTML = `Result is ${result}`;
    } else if (form2.elements['-'].checked) {
        var result = num21 - num22;
        document.getElementById("result2").innerHTML = `Result is ${result}`;
    } else if (form2.elements['*'].checked) {
        var result = num21 * num22;
        document.getElementById("result2").innerHTML = `Result is ${result}`;
    } else if (form2.elements['/'].checked) {
        var result = num21 / num22;
        document.getElementById("result2").innerHTML = `Result is ${result}`;
    } else {
        console.log("asd");
    }
}
document.getElementById("submit2").addEventListener("click", second);



let numero31 = document.getElementById('num31');
function increase1() {
     value = parseInt(numero31.value);
     value += 1;
     numero31.value = value;
}
function decrease1() {
    value = parseInt(numero31.value);
    value -= 1;
    numero31.value = value;
}

let numero32 = document.getElementById('num32');
function increase2() {
    value = parseInt(numero32.value);
    value += 1;
    numero32.value = value;
}
function decrease2() {
   value = parseInt(numero32.value);
   value -= 1;
   numero32.value = value;
}

const form3 = document.getElementById('third')
function third()  {
    let num31 = parseFloat(form3.elements['num31'].value);
    let num32 = parseFloat(form3.elements['num32'].value);

    const op3 =  form3.elements['operator3'].value;
    document.getElementById("result3").innerHTML = `Result is ${calc(num31,num32,op3)}`;
    return false
}
document.getElementById("submit3").addEventListener("click", third);





function calc(num1,num2,op) {
    switch(op){
        case "+":
            var result = num1 + num2;
            break;
        case "-":
            var result = num1 - num2;
            break;
        case "*":
            var result = num1 * num2;
            break;
        case "/":
            var result = num1 / num2;
            break;
        default:
            console.log("Invalid operator");
            break;
    }
    return result;
}