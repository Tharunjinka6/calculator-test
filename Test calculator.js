const display=document.querySelector(".Display");
const clearButton=document.querySelector(".clear-button");
const signchange=document.querySelector(".signchange");
const clearEntry=document.querySelector("#clear-Entry");
const result=document.querySelector("#Equal").parentElement;
let Firstnum=null;
let operator=null;
let waitingforSecondnum=false;
document.querySelector("#One").addEventListener("click", () =>{
    addNumber("1");
})
document.querySelector("#Two").addEventListener("click", () =>{
    addNumber("2");
})
document.querySelector("#Three").addEventListener("click", () =>{
    addNumber("3");
})
document.querySelector("#Four").addEventListener("click", () =>{
    addNumber("4");
})
document.querySelector("#Five").addEventListener("click", () =>{
    addNumber("5");
})
document.querySelector("#Six").addEventListener("click", () =>{
    addNumber("6");
})
document.querySelector("#Seven").addEventListener("click", () =>{
    addNumber("7");
})
document.querySelector("#Eight").addEventListener("click", () =>{
    addNumber("8");
})
document.querySelector("#Nine").addEventListener("click", () =>{
    addNumber("9");
})
document.querySelector("#Zero").addEventListener("click", () =>{
    addNumber("0");
})
document.querySelector("#dot").addEventListener("click", () =>{
    addNumber(".");
})

function addNumber(number){
    if(waitingforSecondnum){
        display.textContent+=number;
        waitingforSecondnum=false;
    } else if(display.textContent.trim()==="0"){
        display.textContent=number;
    } else{
        display.textContent+=number;
    }
}

document.querySelector("#Addition").parentElement.addEventListener("click", () =>{
    workoperator("+");
} )
document.querySelector("#Subtract").parentElement.addEventListener("click", () =>{
    workoperator("-");
} )
document.querySelector("#Divide").parentElement.addEventListener("click", () =>{
    workoperator("/");
} )
document.querySelector("#Multiplication").parentElement.addEventListener("click", () =>{
    workoperator("*");
} )

function workoperator(selectedoperator){
    Firstnum=Number(display.textContent);
    operator=selectedoperator;
    waitingforSecondnum=true;
    display.textContent+=operator;
}

clearButton.addEventListener("click", () =>{
    display.textContent="0";
    Firstnum=null;
    operator=null;
    waitingforSecondnum=false;
})

signchange.addEventListener("click", () =>{
    let currnum=display.textContent;
    currnum=currnum*-1;
    display.textContent=`(${currnum})`;
})

document.querySelector("#percentage").addEventListener("click", () =>{
    let number=Number(display.textContent);
    number=number/100;
    display.textContent=number;
})

function TopButtons(Top){
    if(display.textContent.trim()==="0"){
        display.textContent=Top;
    } else{
        display.textContent+=Top;
    }
}

clearEntry.addEventListener("click", () =>{
    if(display.textContent.length>1){
        display.textContent=display.textContent.slice(0, -1);
    } else{
        display.textContent="0";
    }
}) 

result.addEventListener("click", () =>{
    if(Firstnum===null || operator===null){
        return;
    }
    const operatorposit=display.textContent.indexOf(operator);
    const secondnumber=Number(display.textContent.slice(operatorposit+1));
    let answer;
    if(operator==="+"){
        answer=Firstnum+secondnumber;
    } else if(operator==="-"){
        answer=Firstnum-secondnumber;
    } else if(operator==="/"){
        if(secondnumber===0){
            display.textContent="Error";
            return;
        }
        answer=Firstnum/secondnumber;
    } else if(operator==="*"){
        answer=Firstnum*secondnumber;
    }
    display.textContent=answer;
    Firstnum=answer;
    operator=null;
    waitingforSecondnum=false;
}) 
