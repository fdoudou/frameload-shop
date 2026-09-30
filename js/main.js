
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

function verifyForm() {
    const inputElements = document.getElementById('form').getElementsByTagName("*");
    
    for (let z = 0; z < inputElements.length; z++) {
        if (inputElements[z].tagName == 'INPUT' || inputElements[z].tagName == 'SELECT') {
            if (inputElements[z].validity.valueMissing || !inputElements[z].validity.valid) {
                inputElements[z].closest('.form-control').querySelector('.invalid-feedback').innerHTML = inputElements[z].validationMessage;
            } else {
                inputElements[z].closest('.form-control').querySelector('.invalid-feedback').innerHTML = inputElements[z].validationMessage;
            }
        }
    }
}