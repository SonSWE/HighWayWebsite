const btnShowHead = document.querySelector('.btn-header-responsive.menu')
const searchBtn = document.querySelector('.btn-header-responsive.search')
const headerMB = document.querySelector('.header-menu-responsive')
const boxSearch =  document.querySelector('.box-search')
const overlay = document.querySelector('.overlay')
btnShowHead.addEventListener('click',()=>{
    headerMB.classList.add('active')
    overlay.classList.add('show')
})
overlay.addEventListener('click',()=>{
    headerMB.classList.remove('active')
    overlay.classList.remove('show')
    boxSearch.classList.remove('active')
})
searchBtn.addEventListener('click',()=>{
    boxSearch.classList.add('active')
    overlay.classList.add('show')
})

const MenuResBtn1 = document.querySelectorAll('#menu-response-btn-1')
const MenuHead1 = document.querySelectorAll('#second-menu-smaller-1')
MenuResBtn1.forEach((item,index)=>{
    item.addEventListener('click',()=>{
        if(MenuHead1[index].classList.contains('active')){
            MenuHead1[index].classList.remove('active')
        }
        else{
            MenuHead1[index].classList.add('active')
        }
       
    })
})
const MenuResBtn2 = document.querySelectorAll('#menu-response-btn-2')
const MenuHead2 = document.querySelectorAll('#second-menu-smaller-2')
console.log(MenuHead2)
MenuResBtn2.forEach((item,index)=>{
    item.addEventListener('click',()=>{
        if(MenuHead2[index].classList.contains('active')){
            MenuHead2[index].classList.remove('active')
        }
        else{
            MenuHead2[index].classList.add('active')
        }
       
    })
})


// Open modal signIn
const ModalSignIN = document.querySelector('.form-signin');
const signInForm = document.querySelector('#sign-in_form')
const signUpForm = document.querySelector('#sign-up_form')
const SignUpBtn = document.querySelector('#sign-btn')
const OpenFormBtn = document.querySelector('#btn-open-form')
const overlayForm = document.querySelector('.overlay-white')
SignUpBtn.addEventListener('click',()=>{
    signInForm.classList.remove('active')
    signUpForm.classList.add('active')
})
overlayForm.addEventListener('click',()=>{
    ModalSignIN.classList.remove('active')
})
OpenFormBtn.addEventListener('click',(e)=>{
    e.preventDefault()
    ModalSignIN.classList.add('active')
})