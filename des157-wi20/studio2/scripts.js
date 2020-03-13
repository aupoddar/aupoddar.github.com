//(function(){
"use strict";

var wallet = document.querySelector('#one');
var wallettext = document.querySelector('#onetext')

wallet.addEventListener('click', function(){
  wallettext.setAttribute("class", "text");
})

var headphones = document.querySelector('#two');
var headphonestext = document.querySelector('#twotext')

headphones.addEventListener('click', function(){
  headphonestext.setAttribute("class", "text");
})

var keys = document.querySelector('#three');
var keystext = document.querySelector('#threetext')

keys.addEventListener('click', function(){
  keystext.setAttribute("class", "text");
})
/*headphones.addEventListener('click', function(){
  headphonestext.setAttribute("class", "text")
})

key.addEventListener('click', function(){
  keytext.setAttribute("class", "text")
})
}())*/
