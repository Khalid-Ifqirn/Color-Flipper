const colors=[
    "#dddd","red","green",
    "yellow"," Rgba(133,122,200)","#F15025",


]
const btn=document.querySelector("button");
const span=document.querySelector("span");
btn.addEventListener('click',changeBaground);
function changeBaground(){
    /*let randomIndex=Math.floor(Math.random() * colors.length);
        document.body.style.backgroundColor=colors[randomIndex];
        span.textContent=colors[randomIndex];
    */
    let rgba="rgba(";
    let arg;
    for(let i=1;i<=4;i++){
	if(i===4){
	    arg = (Math.random() * 0.9).toFixed(1)+")";
	}else{
	    arg = (Math.random() * 255).toFixed()+", ";
	}
        rgba+=arg;
    }
    document.body.style.backgroundColor=rgba;
    span.textContent=rgba;
} 