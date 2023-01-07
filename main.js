const btnshowmodal  = document.querySelectorAll(".btn--show-modal")
const modal = document.querySelector(".modal")
const btnclosemodal = document.querySelector('.btn--close-modal')
const btnscrollto = document.querySelector(".btn--scroll-to")
const section1 = document.querySelector("#section--1")
const overlay = document.querySelector(".overlay")
const navlinks = document.querySelector(".nav__links")


btnshowmodal.forEach(element => {
    element.addEventListener('click',openModal)
});
// btnshowmodal.addEventListener("click",openModal) nothing else
btnclosemodal.addEventListener("click",hideModal)
btnscrollto.addEventListener("click",scroll)
function scroll(){
    section1.scrollIntoView({ behavior: 'smooth' });
}
function openModal(){
    modal.classList.remove("hidden")
    overlay.classList.remove("hidden")
    
}
function hideModal(){
    modal.classList.add("hidden")
    overlay.classList.add("hidden")
}

// this is for the scrolling the navbar 
navlinks.addEventListener("click",function(e){
    e.preventDefault()
    
    const id = e.target.getAttribute("href")
    console.log(id);
    document.querySelector(id).scrollIntoView({behavior:"smooth"})
    
})

// const operationstab = document.querySelectorAll(".operations__tab")
// operationstab.forEach(element => {
//     element.addEventListener("click",function(e){
        
//         element.classList.add('operations__tab--active')
//         console.log(element);

//     })
// });

//unoptimized codebase to work 

const instantTransfers = document.querySelector('.operations__tab--1')
const instantLoans = document.querySelector('.operations__tab--2')
const instantClosing = document.querySelector('.operations__tab--3')

const operationsContent = document.querySelector('.operations__content')
const operationsContent2 = document.querySelector('.operations__content--2')
const operationsContent1 = document.querySelector('.operations__content--1')
const operationsContent3 = document.querySelector('.operations__content--3')


instantTransfers.addEventListener('click',function(){
    operationsContent.classList.remove('operations__content--active')
    operationsContent1.classList.add('operations__content--active')
    
})

instantLoans.addEventListener('click',function(){
    console.log('cclik')
    
    operationsContent.classList.remove('operations__content--active')
    operationsContent2.classList.add('operations__content--active')
   
    
})
//doing for close the modal 
instantClosing.addEventListener('click',function(){
    operationsContent.classList.remove('operations__content--active')
    operationsContent3.classList.add('operations__content--active')
})
