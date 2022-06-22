"use strict";
window.onload = function(){
    document.addEventListener('keydown', function(event) {
        if (event.code === 'Escape') {
            document.body.classList.toggle("maket");
        }
    });
}
