let boxes=document.querySelectorAll(".box");
let resetBtn=document.querySelector("#reset-btn");
let newgamebtn=document.querySelector("#new-btn");
let msgContainer=document.querySelector(".msg-container");
let msg=document.querySelector("#msg");
let turn0=true;
const winpattern=[
[0,1,2],
[0,3,6],
[0,4,8],
[1,4,7],
[2,5,8],
[2,4,6],
[2,4,5],
[6,7,8],];
const resetGame=()=>{
    turn0=true;
    enableboxes();
    msgContainer.classList.add("hide")
};



    boxes.forEach ((box)=>{box.addEventListener ("click",() =>{
    box.innerText="o";
    if(turn0==true){
        box.innerText="o";
        turn0=false
    }
    else{box.innerText="x";turn0=true};
    box.disabled=true;
    checkWinner();
});
    
});
const disableboxes=()=>{
    for(let box of boxes){box.disabled=true;}
}
const enableboxes=()=>{for(let box of boxes){
    box.disabled=false;
    box.innerText=""
}}
const showWinner=(winner)=>{msg.innerText="CONGRATULATION,WINNER IS ",winner;
msgContainer.classList.remove("hide");
}


    const checkWinner=()=>{
    for(let pattern of winpattern){
    
       let t= boxes[pattern[0]].innerText
       let r=boxes[pattern[1]].innerText
       let i=boxes[pattern[2]].innerText
        if(t!=""&&r!=""&&i!=""){
            if(t===r&&r===i){console.log("winner",t)
            
        showWinner(t);
    disableboxes();
  
            
        }
    }
}}
newgamebtn.addEventListener("click",resetGame);
resetBtn.addEventListener("click",resetGame);
