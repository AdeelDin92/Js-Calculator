let display = document.querySelector(".display");   // display refrence

let buttons = document.querySelectorAll(".button"); //button refrence

buttons.forEach(button =>{                   
        button.addEventListener("click",calculate)   // addEventListener on each node
})


function calculate (e) {           // switch cases based on each buttons innerText value
    switch(e.target.innerText){
        case "CE":
            display.innerText = " ";
            break;       
        case "←":
            if (display.innerText) {
                display.innerText = display.innerText.slice(0,-1);
            }           
            break;
        case "=":
            try {
                display.innerText = eval(display.innerText);   // eval function to calculate math 
            } catch {
                display.innerText = "Error";
            }
           
            break;   
        default:
            display.innerText += e.target.innerText;         
    }
}