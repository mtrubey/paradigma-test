"use strict";
window.onload = function(){
    let mobileMenuIcon = document.querySelectorAll('.icon-menu');
    let mobileMenu = document.querySelector('.mobile-menu-container')

    mobileMenuIcon.forEach(el => {
        el.addEventListener("click", () => {
            el.classList.toggle('close')

            mobileMenu.classList.toggle('show')
        })
    })

    let advantagesBtn = document.querySelector('.advantages__btn')
    let advantagesBox = document.querySelector('.advantages-box')
    let advantagesInfo = document.querySelector('.advantages__info')

    advantagesBtn.addEventListener('click', () => {
        window.setTimeout( () =>{
            advantagesBox.classList.toggle('show')
            advantagesInfo.classList.toggle('show')
        }, 300)
    })

    let callBtn = document.querySelectorAll('.call-back-btn')
    let closeModalBtn = document.querySelector('.modal__close')
    let sendBtn = document.querySelector('.btn_send')
    let checkPolicy = document.querySelector('.check-policy__input')
    let phoneInput = document.getElementById('call-me')

    callBtn.forEach(el => {
        el.addEventListener('click', () => {
            document.body.classList.add('show')
        })
    })
    closeModalBtn.addEventListener('click', () => {
        document.body.classList.remove('show')
    })
    sendBtn.disabled = true
    checkPolicy.addEventListener("change", () => {
        if ((checkPolicy.checked)){
            sendBtn.disabled = false


            sendBtn.addEventListener('click', (e) => {
                e.preventDefault()

                let modalInfoShow = document.querySelector('.modal__info_show')
                let modalInfoSuccess = document.querySelector('.modal__info_success')
                let modalFormContainer = document.querySelector('.modal__form-container')

                modalInfoShow.style.display = 'none'
                modalInfoSuccess.style = 'opacity: 1; transform: scale(1)'
                modalFormContainer.style = 'height: auto'


            }, false)
        } else {
            sendBtn.disabled = true
        }
    })
}
