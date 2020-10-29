function outNum(num, elem, time, step){
	let l = document.querySelector('#'+ elem);
	let n = 0;
	let t = Math.round(time / (num / step));
	let interval = setInterval(() => {
		n = n + step;
		if(n == num){
			clearInterval(interval);
		}
		if(n >= num) {
	        clearInterval(interval);
	        n = num;
	    }
		l.innerHTML = n;
	},t);
}

function isPartiallyVisible(el) {
    var elementBoundary = el.getBoundingClientRect();
 
    var top = elementBoundary.top;
    var bottom = elementBoundary.bottom;
    var height = elementBoundary.height;
 
    return ((top + height >= 0) && (height + window.innerHeight >= bottom));
}
var isScrolling = false;
 
window.addEventListener("scroll", throttleScroll, false);
 
function throttleScroll(e) {
    if (isScrolling == false ) {
        window.requestAnimationFrame(function() {
          dealWithScrolling(e);
          isScrolling = false;
        });
    }
    isScrolling = true;
}   
let cc = true;
function dealWithScrolling(e) {
    if(isPartiallyVisible(document.querySelector(".numbers")) && cc){
    	cc = false;
    	outNum(3587, 'clients', 1000, 123);
    	outNum(207, 'coffee', 1000, 9);
    	outNum(2500, 'posts', 1000, 50);
    	outNum(873, 'likes', 1000, 12);
    	outNum(900, 'launched', 1000, 12);
    }  
}
