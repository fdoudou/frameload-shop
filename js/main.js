
function viewCart (target) {
    if (document.querySelector(target).className === 'modal-parent') {
        document.querySelector(target).className = 'jma-show';
    }   else {
        document.querySelector(target).className = 'modal-parent';
    }
}