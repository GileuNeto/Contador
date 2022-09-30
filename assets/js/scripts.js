let count = 0;
const CURRENT_NUMBER = document.getElementById('currentNumber');

function increment() {
	count++;
	CURRENT_NUMBER.innerHTML = count; 
	verifyColor()      
}

function decrement() {
	count--;
	CURRENT_NUMBER.innerHTML = count;   
	verifyColor()   
}

function verifyColor() {
    if(count > 0) {
        currentNumber.style.color = "#000fff";
    }
    else if(count < 0) {
        currentNumber.style.color = "#ff0000";
    }
    else {
        currentNumber.style.color = "purple";
    }
}