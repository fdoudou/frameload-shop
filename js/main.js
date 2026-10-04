
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

function removeElement(target) {
    document.querySelector(target).remove();
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

function filterContent(container,filter) {
    const keyword = document.querySelector(filter).value;
    const list = document.querySelectorAll(container);
    
    for (let c = 0; c < list.length; c++) {
        if (list[c].innerText.toLowerCase().includes(keyword.toLowerCase())) {
            list[c].closest("div").style.display = "";
        } else {
            list[c].closest("div").style.display = "none";
        }
    }
}

function slideImage(pos) {
    const scrollWidth = 300;
    const slideElement = document.querySelector('#slide-container');
        slideElement.scroll({
            top: 0,
            left: pos*scrollWidth,
            behavior: "smooth"
        }
    );
}