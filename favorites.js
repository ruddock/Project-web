/*jslint browser: true, devel: true, eqeq: true, plusplus: true, sloppy: true, vars: true, white: true*/

/* FAVORITE HEARTS */

/*FAVORITE 1*/
/* 1. selecteer elementen met document.querySelector */
var button = document.querySelector('.Laag_1'); // first section element


var favorite = function () {
  /* 3. toggle een class op een element, dit triggert een CSS Transition (zie CSS: section.dance) */
	button.classList.toggle('clicked')
}

/* 2. voeg een event toe aan een element */
button.addEventListener('click', favorite);


/*FAVORITE 2*/
var button2 = document.querySelector('.Laag_2');


var favorite2 = function () {
 
	button2.classList.toggle('clicked2')
}

/* 2. voeg een event toe aan een element */
button2.addEventListener('click', favorite2);


/*FAVORITE 3*/
var button3 = document.querySelector('.Laag_3');


var favorite3 = function () {
 
	button3.classList.toggle('clicked3')
}

/* 2. voeg een event toe aan een element */
button3.addEventListener('click', favorite3);


/*FAVORITE 4*/
var button4 = document.querySelector('.Laag_4');


var favorite4 = function () {
 
	button4.classList.toggle('clicked4')
}

/* 2. voeg een event toe aan een element */
button4.addEventListener('click', favorite4);


/*FAVORITE 5*/
var button5 = document.querySelector('.Laag_5');


var favorite5 = function () {
 
	button5.classList.toggle('clicked5')
}

/* 2. voeg een event toe aan een element */
button5.addEventListener('click', favorite5);


/*FAVORITE 6*/
var button6 = document.querySelector('.Laag_6');


var favorite6 = function () {
 
	button6.classList.toggle('clicked6')
}

/* 2. voeg een event toe aan een element */
button6.addEventListener('click', favorite6);
    


$(':radio').change(
  function(){
    $('.choice').text( this.value + ' stars' );
  } 
)
(function() {
    console.log("I AM READING THE SCRIPT");
})();

