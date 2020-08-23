//Mouseover animation//
var imageArray = [];

imageArray[0] = new Image();
imageArray[0].src = "assets/welcome/vector1.svg";

imageArray[1] = new Image();
imageArray[1].src = "assets/welcome/vector2.svg";

imageArray[2] = new Image();
imageArray[2].src = "assets/welcome/vector3.svg";

imageArray[3] = new Image();
imageArray[3].src = "assets/welcome/vector4.svg";

imageArray[4] = new Image();
imageArray[4].src = "assets/welcome/vector5.svg";

imageArray[5] = new Image();
imageArray[5].src = "assets/welcome/vector17.svg";

imageArray[6] = new Image();
imageArray[6].src = "assets/welcome/vector7.svg";

imageArray[7] = new Image();
imageArray[7].src = "assets/welcome/vector8.svg";

imageArray[8] = new Image();
imageArray[8].src = "assets/welcome/vector9.svg";

imageArray[9] = new Image();
imageArray[9].src = "assets/welcome/vector10.svg";

imageArray[10] = new Image();
imageArray[10].src = "assets/welcome/vector11.svg";

imageArray[11] = new Image();
imageArray[11].src = "assets/welcome/vector12.svg";

imageArray[12] = new Image();
imageArray[12].src = "assets/welcome/vector13.svg";

imageArray[13] = new Image();
imageArray[13].src = "assets/welcome/vector14.svg";

imageArray[14] = new Image();
imageArray[14].src = "assets/welcome/vector15.svg";

imageArray[15] = new Image();
imageArray[15].src = "assets/welcome/vector16.svg";

imageArray[16] = new Image();
imageArray[16].src = "assets/welcome/vector17.svg";

imageArray[17] = new Image();
imageArray[17].src = "assets/welcome/vector18.svg";

imageArray[18] = new Image();
imageArray[18].src = "assets/welcome/vector19.svg";

imageArray[19] = new Image();
imageArray[19].src = "assets/welcome/vector20.svg";

imageArray[20] = new Image();
imageArray[20].src = "assets/welcome/vector21.svg";


//----------------------- js codes -----------------------//


function mouseOverImage1(){
    let vectorImage1 = document.getElementById("vectorPic1");

    let i = Math.floor(Math.random()*20);
    vectorImage1.src = imageArray[i].src;

    console.log(vectorImage1);
    
};

function mouseOverImage2() {
    let vectorImage2 = document.getElementById("vectorPic2");

    let i = Math.floor(Math.random() * 20);
    vectorImage2.src = imageArray[i].src;

    console.log(vectorImage2);

};


function mouseOverImage3() {
    let vectorImage3 = document.getElementById("vectorPic3");

    let i = Math.floor(Math.random() * 20);
    vectorImage3.src = imageArray[i].src;

    console.log(vectorImage4);

};

function mouseOverImage4() {
    let vectorImage4 = document.getElementById("vectorPic4");

    let i = Math.floor(Math.random() * 20);
    vectorImage4.src = imageArray[i].src;

    console.log(vectorImage4);

};


function mouseOverImage5() {
    let vectorImage5 = document.getElementById("vectorPic5");

    let i = Math.floor(Math.random() * 20);
    vectorImage5.src = imageArray[i].src;

    console.log(vectorImage5);

};



//----------------- expand email-------------------//

function emailMe(){
    var expandEmail = document.getElementById("emailForm");
    expandEmail.parentElement.style.display = "block";
}