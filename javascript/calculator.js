var is_Open = false;
var calculator_Position = document.getElementsByClassName("calculatorDialogSlide");

function calculatorSelect() {
    "use strict";
    var i = calculator_Position.length;
    
    while (i--) {
        if (is_Open) {
            calculator_Position[i].style.webkitTransform = 'translate(0px, 0px)';
            calculator_Position[i].style.MozTransform = 'translate(0px, 0px)';
            calculator_Position[i].style.msTransform = 'translate(0px, 0px)';
            calculator_Position[i].style.OTransform = 'translate(0px, 0px)';
            calculator_Position[i].style.transform = 'translate(0px, 0px)';
            calculator_Position[i].style.webkitTransition = 'opacity 1s ease-in, -webkit-transform .7s ease-in';
            calculator_Position[i].style.MozTransition = 'opacity 1s ease-in, -moz-transform .7s ease-in';
            calculator_Position[i].style.msTransition = 'opacity 1s ease-in';
            calculator_Position[i].style.OTransition = 'opacity 1s ease-in, -o-transform .7s ease-in';
            calculator_Position[i].style.transition = 'opacity 1s ease-in, transform .7s ease-in';
            calculator_Position[i].style.opacity = 0;
            is_Open = false;
        } else {
            calculator_Position[i].style.webkitTransform = 'translate(0px, 430px)';
            calculator_Position[i].style.MozTransform = 'translate(0px, 430px)';
            calculator_Position[i].style.msTransform = 'translate(0px, 430px)';
            calculator_Position[i].style.OTransform = 'translate(0px, 430px)';
            calculator_Position[i].style.transform = 'translate(0px, 430px)';
            calculator_Position[i].style.webkitTransition = 'opacity .5s ease-in, -webkit-transform .7s ease-in';
            calculator_Position[i].style.MozTransition = 'opacity .2s ease-in, -moz-transform .7s ease-in';
            calculator_Position[i].style.msTransition = 'opacity .2s ease-in';
            calculator_Position[i].style.OTransition = 'opacity .2s ease-in, -o-transform .7s ease-in';
            calculator_Position[i].style.transition = 'opacity .2s ease-in, transform .7s ease-in';
            calculator_Position[i].style.opacity = 1;
            is_Open = true;
        }
    }
}