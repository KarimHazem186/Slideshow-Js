let myImage = document.getElementById("slideshow");
let images = ["images/image_1.jpg","images/image_2.jpg","images/image_3.png","images/image_4.png"];
let i = 0;
// myImage.setAttribute('src','images/image_1.jpg');
/****ORRRRRRRRRRRRRRRRRRRRRRRRRRR */
// myImage.setAttribute('src',images[0]);

function slideshow() {
    // console.log("log");
    myImage.setAttribute('src',images[i]);
    i++;

    if (i >= images.length){
        i = 0;
    } 

    setTimeout(function(){
        slideshow();
    },2000)
}

slideshow();