let items = Array.from(document.querySelectorAll(".item img"));
let lightBox = document.querySelector(".lightBox");
let lightBoxItem = document.querySelector(".lightBoxItem");
let closeBtn = document.querySelector(".close");
let nextBtn = document.querySelector(".next");
let prevBtn = document.querySelector(".prev");

let currentIndex ;

for(let i = 0; i<items.length; i++){
    items[i].addEventListener("click",function(e){

        lightBox.classList.add("active");
        let showSrc = e.target.getAttribute("src");

        lightBoxItem.style.backgroundImage = `url(${showSrc})`

        currentIndex = items.indexOf(e.target);
    });
}
function close() {
    lightBox.classList.remove("active");
}
closeBtn.addEventListener("click",function () {
    close()
})
function next() {
    currentIndex++;
    if (currentIndex >= items.length) {
        currentIndex = 0;
    }
    let imgSrc = items[currentIndex].getAttribute("src");
    lightBoxItem.style.backgroundImage = `url(${imgSrc})`;
 }
nextBtn.addEventListener("click", function() {
next()
});

function prev() {
    currentIndex--;
    if (currentIndex < 0) {
        currentIndex = items.length - 1;
    }
    let imgSrc = items[currentIndex].getAttribute("src");
    lightBoxItem.style.backgroundImage = `url(${imgSrc})`;
}
prevBtn.addEventListener("click", function() {
    prev() 
});

document.addEventListener("keydown",function(e){
    if (e.key=="ArrowRight") {
        next()
    }else if(e.key == "ArrowLeft"){
        prev()
    }else if(e.key == "Escape"){
        close()
    }

})