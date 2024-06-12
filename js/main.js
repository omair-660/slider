let items = Array.from(document.querySelectorAll(".item img"));
let search = Array.from(document.querySelectorAll(".search"));

let lightBox = document.querySelector(".lightBox");
let lightBoxItem = document.querySelector(".lightBoxItem");
let closeBtn = document.querySelector(".close");
let nextBtn = document.querySelector(".next");
let prevBtn = document.querySelector(".prev");

let currentIndex;
let autoSlideInterval;

function openLightBox(index) {
    lightBox.classList.add("active");
    let showSrc = items[index].getAttribute("src");
    lightBoxItem.style.backgroundImage = `url(${showSrc})`;
    currentIndex = index;
    lightBoxItem.classList.add("active");
    startAutoSlide();
}

for (let i = 0; i < items.length; i++) {
    items[i].addEventListener("click", function () {
        openLightBox(i);
    });
}
for (let i = 0; i < search.length; i++) {
    search[i].addEventListener("click", function () {
        openLightBox(i);
    });
}

function closeLightBox() {
    lightBox.classList.remove("active");
    clearInterval(autoSlideInterval);
}

closeBtn.addEventListener("click", function () {
    closeLightBox();
});

function next() {
    currentIndex++;
    if (currentIndex >= items.length) {
        currentIndex = 0;
    }
    let imgSrc = items[currentIndex].getAttribute("src");
    lightBoxItem.style.backgroundImage = `url(${imgSrc})`;
}

nextBtn.addEventListener("click", function () {
    next();
});

function prev() {
    currentIndex--;
    if (currentIndex < 0) {
        currentIndex = items.length - 1;
    }
    let imgSrc = items[currentIndex].getAttribute("src");
    lightBoxItem.style.backgroundImage = `url(${imgSrc})`;
}

prevBtn.addEventListener("click", function () {
    prev();
});

document.addEventListener("keydown", function (e) {
    if (e.key == "ArrowRight") {
        next();
    } else if (e.key == "ArrowLeft") {
        prev();
    } else if (e.key == "Escape") {
        closeLightBox();
    }
});

function startAutoSlide() {
    autoSlideInterval = setInterval(next, 3000); 
}
