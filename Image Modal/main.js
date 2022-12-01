var modal = document.getElementById("myModal");

var modalImage = document.getElementById("modalImage");

for (var i=1;i<4;i++){
    var img = document.getElementById("img"+i);
    if (typeof window.addEventListener === "function"){
        img.addEventListener("click",function(){
            modal.style.display = "block";
            modalImage.src = this.src;
        });
    }
}

var span = document.getElementsByClassName("close")[0];
span.onclick = function() { 
    modal.style.display = "none";
}