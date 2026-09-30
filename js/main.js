
function viewCart (target) {
    if (document.querySelector(target).className === 'modal-parent') {
        document.querySelector(target).className = 'fmld-show';
    }   else {
        document.querySelector(target).className = 'modal-parent';
    }
}

function hideElement(target) {
    document.querySelector(target).style.display = "none";
}

function showElement(target) {
    document.querySelector(target).style.display = "";
}

function decreaseValue (element) {
    document.querySelector(element).stepDown();
}

function increaseValue (element) {
    document.querySelector(element).stepUp();
}