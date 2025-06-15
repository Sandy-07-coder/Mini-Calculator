// Grabbing the elements

const display=document.getElementById("display");

//variables

let currentInput='';
let currentOperator='';
let previousInput='';

function appendNumber(num){
    currentInput+=num;
    display.value=`${previousInput} ${currentOperator} ${currentInput}`;

}

function appendOperator(oper){
    if(currentInput==='') return;
    if(previousInput !==''){
        calculate();
    }
    currentOperator=oper;
    console.log(currentOperator);
    previousInput=currentInput;
    currentInput='';
    display.value=`${previousInput} ${currentOperator}`;
}

function calculate(){
    if(previousInput === '' || currentInput==='') return;

    let result;
    let prev=parseFloat(previousInput);
    let current=parseFloat(currentInput);

    switch(currentOperator){
        case '+':
            result=prev+current;
            break;
        case '-':
            result=prev-current;
            break;
        case '*':
            result=prev*current;
            break;
        case '/':
            if(current===0){
                alert("cannot divide by zero");
                return;
            }
            result=prev/current;
            break;
            
        default:
            return;    
    }

     currentInput=result.toString();
     currentOperator='';
     previousInput='';
     display.value=currentInput;


  

}

function clearDisplay(){
    currentInput='';
    previousInput='';
    currentOperator='';
    display.value='';


}