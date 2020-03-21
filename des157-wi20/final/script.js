(function(){
"use strict"

const globe = document.querySelector('#globe');
const globeoverlay = document.querySelector('#globeoverlay');
const globeclose = document.querySelector('#globeclose');

const spoon1 = document.querySelector('#spoon1');
const fork1 = document.querySelector('#fork1');
const spoon2 = document.querySelector('#spoon2');

var onetext = document.querySelector('#onetext');
var twotext = document.querySelector('#twotext');
var threetext = document.querySelector('#threetext')

const iphone = document.querySelector('#iphone');
const iphonetext = document.querySelector('#iphonetext');

const truck = document.querySelector('#truck');
const trucktext = document.querySelector('#trucktext');

globe.addEventListener('click', function () {
    document.getElementById("globeoverlay").style.display="flex";
    
   
})
globeclose.addEventListener('click', function (){
    document.getElementById("globeoverlay").style.display="none";
})

spoon1.addEventListener('click', function (){
    document.getElementById("spoon1").src = "spoonfull.png";
    onetext.setAttribute("class", "text");
})

fork1.addEventListener('click', function (){
    document.getElementById("fork1").src = "forkfilled.png";
    twotext.setAttribute("class", "text");
})

spoon2.addEventListener('click', function (){
    document.getElementById("spoon2").src = "lastspoonfill.png";
    threetext.setAttribute("class", "text");
})


iphone.addEventListener('click', function(){
iphonetext.setAttribute("class", "itext");
})

truck.addEventListener('click', function(){
    trucktext.setAttribute("class", "truckt");
    })

}()); 