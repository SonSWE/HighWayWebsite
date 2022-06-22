function CloseModel(id) {
    const modal = document.querySelector('#' + id);
    if (modal.classList.contains('active')) {
        modal.classList.remove('active')
    }
}

function OpenModel(id) {
    const modal = document.querySelector('#' + id);
    if (modal.classList.contains('active')) {
        modal.classList.remove('active')
    }
    else {
        modal.classList.add('active')
    }
}