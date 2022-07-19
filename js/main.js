const backToTop = document.querySelector('.back')

backToTop.addEventListener('click', function(){
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    })
})

// $('.multiple-items').slick({
//     infinite: true,
//     slidesToShow: 1,
//     slidesToScroll: 1
//   });

// const bonTheA = document.querySelectorAll('.thea')

// bonTheA.forEach(function(item){
//     item.addEventListener('click', function(){
//         bonTheA.forEach(function(theAMoi){
//             theAMoi.classList.remove('active')
//         })
//         item.classList.add('active')
//     })
// })
// const tagTick=document.querySelectorAll('.tick')
// tagTick.forEach(function(tick_click){
//     tick_click.addEventListener('click',function(){
//         tagTick.forEach(function(tick_new){
//             tick_new.classList.remove('active')
//         })
//         tick_click.classList.add('active')
//     })
    
// })

// const tagTick=document.querySelectorAll('.tick')
// tagTick.forEach(function(tick_after){
//     tick_after.addEventListener('click',function(){
//         tagTick.forEach(function(moi){
//             moi.classList.remove('active')
//         })
//         tick_after.classList.add('active')
    
//     })
// 
const tick_new =document.querySelectorAll('.tick')
tick_new.forEach(function(tick_af){
    tick_af.addEventListener('click',function(){
        tick_new.forEach(function(moi){
            moi.classList.remove('active')
        })
        tick_af.classList.add('active')
    })
})

const iconMenuMobile = document.querySelector('.icon__menu')
const menuMobile = document.querySelector('.menu__mobile')
console.log(menuMobile);

iconMenuMobile.addEventListener('click', function(){
    menuMobile.classList.toggle('active')
})