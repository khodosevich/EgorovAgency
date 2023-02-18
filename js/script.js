const evenBtn = document.getElementById("send-email");
const closeBtns = document.getElementById("close");
const closeBtn = document.getElementById("close1");

evenBtn.addEventListener("click",function(event){
    document.getElementById("my-modal").classList.add("open","overlay");

});

closeBtns.addEventListener("click",function(){
    document.getElementById("my-modal").classList.remove("open","overlay");

});

closeBtn.addEventListener("click",function(){
    document.getElementById("my-modal").classList.remove("open","overlay");

});

window.addEventListener("keydown" , function(e){
    if(e.key === "Escape"){
        document.getElementById("my-modal").classList.remove("open","overlay");
    }
});