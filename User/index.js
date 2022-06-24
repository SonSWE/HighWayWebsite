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

const ModalSignIN = document.querySelector('.form-signin'); //form dang nhap
const signInForm = document.querySelector('#sign-in_form') // Cho dang nhap
const signUpForm = document.querySelector('#sign-up_form') // Cho dang ky
const SignUpBtn = document.querySelector('#sign-btn')// Nut dang ky
const OpenFormBtn = document.querySelector('#btn-open-form') // nut dang nhap
const overlayForm = document.querySelector('.overlay-white') // Overlay trang

OpenFormBtn.addEventListener('click',(e)=>{ // them su kien click cho nut dang nhap
    e.preventDefault()
    ModalSignIN.classList.add('active') // add class active

})
SignUpBtn.addEventListener('click',()=>{
    signInForm.classList.remove('active') // bo class active
    signUpForm.classList.add('active')
})
overlayForm.addEventListener('click',()=>{
    ModalSignIN.classList.remove('active') // bo class active
})



// admin
function DoLogin(){
    const usernameInput = document.querySelector('#username')
    const passwordInput = document.querySelector('#password')
    if(usernameInput.value === "admin" && passwordInput.value === "admin") {
        location.href = '../admin.html';
    }
    else{
        alert("Tài khoản mật khẩu không chính xác")
    }

}
DoLogin();

//user


