// array contain all images
// function slideshow
var i = 0;
var slidesImages = ["images/image_1.jpg","images/image_2.jpg","images/image_3.png","images/image_4.png"];

// Expression function
var slideShow = function () {
    document.slideshow.src = slidesImages[i];
    
    if( i<slidesImages.length - 1 ){
        i++;

    } else {
        i = 0;
    }
    setTimeout("slideShow()",2000);
}

slideShow();