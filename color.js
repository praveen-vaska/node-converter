let colors=["Yellow","red","blue","green","white","skyblue","aqua","pink","light green"]
const containe=document.querySelector(".containe");
containe.addEventListener("mouseover",(event)=>{
    console.log("clicked");
    setInterval(()=>{
        event.target.style.color=colors[Math.floor(Math.random()*colors.length)];
    },1000);
})
