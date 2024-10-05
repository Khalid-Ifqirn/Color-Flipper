const hexs=[0,1,2,3,4,5,6,7,8,9,"A","B","C","D","E","F"];
const btn=document.querySelector("button");
const span=document.querySelector("span");
btn.addEventListener("click",changeBaground);
function changeBaground(){
    let shuffled;
    let hex="#";
//Method 1:
   /* for(let i=0;i<6;i++){
        let randomIndex=Math.floor(Math.random() * hexs.length);
        hex+=hexs[randomIndex];
    }*/

//Method 2:	
    for(let i=0;i<6;i++){
        shuffled = hexs.sort(() => Math.random() - 0.5);
        let randomIndex=Math.floor(Math.random() * shuffled.length);
        hex+=shuffled[randomIndex];
    }
    document.body.style.backgroundColor=hex;
    span.textContent=hex;
}    