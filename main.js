var modal = document.getElementById('simplemodal')
var modalBtn = document.getElementById('modal-btn')
var closeBtn = document.getElementsByClassName('closebtn')[0]

modalBtn.addEventListener('click', openModal)
closeBtn.addEventListener('click', closeModal)
window.addEventListener('click', clickOutside)

function openModal(){

    modal.style.display='block'
}

function closeModal(){

    modal.style.display='none'
}
function clickOutside(e){
    if(e.target == modal){
        modal.style.display='none'
    }
    
}



