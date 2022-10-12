let displayedImage = document.querySelector('.displayed-img');
let thumbBar = document.querySelector('.thumb-bar');

// Take it further 1.
let images = ['images/flowers-pink-small.jpg', 'images/flowers-purple-small.jpg', 'images/flowers-red-small.jpg', 'images/flowers-white-small.jpg', 'images/flowers-yellow-small.jpg'];

for (let i = 0; i < images.length; i++) {
    let newImage = document.createElement('img');
    newImage.setAttribute('src', images[i]);
    thumbBar.appendChild(newImage);
}

function displayImages(value) {
    displayedImage.setAttribute('src', value);
}

thumbBar.onclick = function(event) {
    if (event.target && event.target.nodeName === 'IMG') {
        let imgSrc = event.target.getAttribute('src');
        if (imgSrc === "images/flowers-pink-small.jpg") {
            displayImages("images/flowers-pink-large.jpg")
            addCaption("Pink Flowers");
            makeGray(imgSrc);
        } else if (imgSrc === "images/flowers-purple-small.jpg") {
            displayImages("images/flowers-purple-large.jpg")
            addCaption("Purple Flowers");
            makeGray(imgSrc);
        } else if (imgSrc === "images/flowers-red-small.jpg") {
            displayImages("images/flowers-red-large.jpg")
            addCaption("Red Flowers");
            makeGray(imgSrc);
        } else if (imgSrc === "images/flowers-white-small.jpg") {
            displayImages("images/flowers-white-large.jpg")
            addCaption("White Flowers");
            makeGray(imgSrc);
        } else {
            displayImages("images/flowers-yellow-large.jpg")
            addCaption("Yellow Flowers");
            makeGray(imgSrc);
        }
    }
}

// Take it further 2.
let figcaption = document.querySelector('figcaption');

function addCaption(caption) {
    figcaption.innerHTML = caption;
}

displayImages("images/flowers-pink-large.jpg");
addCaption("Pink Flowers");
makeGray("images/flowers-pink-small.jpg")

// Take it further 3.
function makeGray(exception) {
    let children = thumbBar.children;
    for (let i = 0; i < children.length; i++) {
        if (children[i].getAttribute('src') !== exception) {
            children[i].style.filter = "grayscale(1)";
        } else {
            children[i].style.filter = "grayscale(0)";
        }
    }
}