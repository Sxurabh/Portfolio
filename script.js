/* -------------Hamburger Handler-----------
 */
burger = document.querySelector('.burger')
navbar = document.querySelector('.navbar')
navList = document.querySelector('.navList')


burger.addEventListener('click', ()=>{

        navList.classList.toggle('v-class');
        navbar.classList.toggle('navbar');
})
